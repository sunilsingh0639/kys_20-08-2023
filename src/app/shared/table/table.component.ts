import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { PlansService } from 'src/app/services/plans.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
selected: any;
  allBooks: any;
constructor (private _service : BooksService , private _fb : FormBuilder, private _planservice: PlansService) {}
heading: string = 'Manage Books'
headings: string = 'Manage Plans'
addNewBooks! : FormGroup;
// @Input() 
// title: string=''
 @Input() 
 Data: any[]=[]
 @Input()
 headers: any[]=[];
 booklist: any[] = [];
 @Output()
 updatedSearch = new EventEmitter<string>()
 @Output()
 updatedGetPaginate = new EventEmitter<number>()
 @Output()
 updatedNext = new EventEmitter<number>()
 @Output()
 updatedPrevious = new EventEmitter<number>()
 @Output()
 updateddeleteSelectedd = new EventEmitter<number>()

 pageNumber = 1;
 totalRecord = 0;
 //noOfPage: any[] = [];
 apiEnpoint: string = 'http://103.224.246.103:3004/';
 response: any[] = [];
 
// Assuming you have retrieved these values from API
totalRecords: number = 30; // Total number of records
recordsPerPage: number = 10; // Number of records per page

totalPages: number = Math.ceil(this.totalRecords / this.recordsPerPage);
noOfPage : number[] = Array.from({ length: this.totalPages }, (_, i) => i + 1);

selectedBookId: string = ''; 

deleteSelected() {
  this._service.deleteBook(this.selectedBookId)
  .subscribe((res : any) => {
    console.log(res)
   
  })
  
}
deleteSelectedd() {
  this._planservice.deleteBooks(this.selectedBookId)
  .subscribe((res : any) => {
    console.log(res)
   
  })
}

// deleteBooks() {
//   this._planservice.deleteBookByid(this.selectedBookId)
//     .subscribe((res: any) => {
//       console.log(res)
//       this.booklist;
//     })
// }
ngOnInit(): void {
  this.initilizeBookForm();
  console.log(this.booklist)
}
initilizeBookForm() {
  this.addNewBooks = this._fb.group({
    bookName : ['',[]],
    pricing : ['',[]],
    category : ['',[]],
    attachment : ['',[]]
  })
}


postBookData() {
  var formData = new FormData();
  formData.append("bookName", this.addNewBooks.controls['bookName']?.value);
  formData.append("pricing", this.addNewBooks.controls['pricing']?.value);
  formData.append("category", this.addNewBooks.controls['category']?.value);
  formData.append("attachment", this.selectedImage);

  this._service.addNewBook(formData)
    .subscribe((res) => {
      console.log(res);
      this.addNewBooks.reset();
    });
}
selectedImage : any
  changedFiles :any  
  onSelectedImage(event: any) {
    this.selectedImage = event.target.files[0];
  }
  
  editSelected!: number
  editBook(i: number) {
    this.editSelected = i
    this.addNewBooks.patchValue({
      bookName: this.Data[this.editSelected].bookName,
      pricing: this.Data[this.editSelected].pricing,
      category: this.Data[this.editSelected].category,
       image: this.allBooks.data[this.editSelected].image,
    })
  }


  // onSelectedImage(event: any) {
  //   this.selectedImage = event.target.files[0];
  // }
  
  updateBookData() {
    if (this.editSelected !== undefined) {
      const formData = new FormData();
      formData.append("bookName", this.addNewBooks.controls['bookName']?.value);
      formData.append("pricing", this.addNewBooks.controls['pricing']?.value);
      formData.append("category", this.addNewBooks.controls['category']?.value);
      
      if (this.selectedImage) {
        formData.append("attachment", this.selectedImage, this.selectedImage.name);
      }
  
      formData.append("_id", this.Data[this.editSelected]._id);
  
      this._service.updateBook(this.Data[this.editSelected]._id, formData).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
  @Input() selectedComponent: string | undefined;
  @Input() selectHeading : string | undefined;

  getSearch(value: string) {
         this.updatedSearch.emit(value)}


getPaginate(pageNumber: number){
  this.pageNumber = pageNumber
  this.updatedGetPaginate.emit(this.pageNumber)
}

getprevious() {
  if (this.pageNumber > 1) {
    this.pageNumber--;
    this.updatedPrevious.emit(this.pageNumber);
  }
}

getnext() {
  if (this.pageNumber < this.totalPages) {
    this.pageNumber++;
    this.updatedNext.emit(this.pageNumber);
  }
}
}

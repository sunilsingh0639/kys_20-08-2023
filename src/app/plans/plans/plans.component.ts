import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlansService } from 'src/app/services/plans.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit{
  

  //constructor(private planservice: PlansService){}
  //ngOnInit(): void {
   // this.planservice.getDataList().subscribe((data:any)=>{
      //console.log(data)
    //})
 // }
 planHeading = 'planBook'
  planlist: any=[]
  header: any = [
    {name:'Id', key: 'planId', type: 'number' },
    { name: 'Name', key: 'name', type: 'string' },
    {name:'price', key:'price', type: 'number'}, 
    { name: 'Duretion(Months)', key: 'duration', type: 'number' },
    { name: 'Books', key: 'books', type: 'string' },
   ];
  

  // getPlanList(){
  //   this.planservice.getDataList().subscribe((data: any)=>{
  //     console.log(data)
  //      this.planlist=data
       
  //   })
  // }
  
  selectedComponent = 'planBook'
  booklist: any[] = [];
  addNewBooks!: FormGroup;
  pageNumber = 1;
  totalRecord = 0;
  noOfPage: any[] = [];
  apiEnpoint: string = 'http://103.224.246.103:3004/';
  response: any[] = [];
  page: any
  heading2: string = 'manage plan'




  // apiDatabook: any;





  constructor(private _service: PlansService, private _fb: FormBuilder, private _Router: Router) {
    console.log(this.booklist)
  }

  ngOnInit(): void {
    this.initialLoginForm();


    this._service.getDataList().subscribe((data: any) => {

      // this._service.Data.push(data)
      // this.booklist.push(this.item)
      // console.log(data)

      console.log(this.booklist)
      // this.booklist.forEach((element: any) => {
      //   element.image = this.apiEnpoint + element.image;

      // })
      this.totalRecord = data.data.length;
      this.response = [...data.data];




      this.booklist = [...data.data.slice(0, 10)];
      this.totalRecord = data.data.length;
      for (let index = 0; index < this.totalRecord / 10; index++) {
        this.noOfPage.push(index + 1);

      }

      // this.booklist.forEach((element: any) => {
      //   element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;
      // });


    })
    this.servicedata()
  }
  // getPaginatedData(pageNumber: number) {
  //   this.booklist = [...this.response.splice((pageNumber - 1) * 10, pageNumber * 10)]
  //   this.booklist.forEach((element: any) => {
  //     element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;

  //   })
  // }


  sarch(val: any) {
    this.booklist = this.response.filter((res: any) => {
    return (res.bookName.includes(val)) || (res.category.includes(val))})
  }

  initialLoginForm() {
    this.addNewBooks = this._fb.group({
      bookName: ['', [Validators.required]],
      pricing: ['', [Validators.required]],
      category: ['', [Validators.required]],
      attachment: ['', [Validators.required]]
    })
  }
 selectedImage : any
  changedFiles :any

  
 
  
  onSelectedImage(event: any) {
    this.selectedImage = event.target.files[0];
  }
  
  postBookData() {
    var formData = new FormData();
    formData.append("bookName", this.addNewBooks.controls['bookName']?.value);
    formData.append("pricing", this.addNewBooks.controls['pricing']?.value);
    formData.append("category", this.addNewBooks.controls['category']?.value);
   
  
    //this._service.addNewBook(formData)
      //.subscribe((res) => {
        //console.log(res);
        //this.addNewBooks.reset();
      //});
  }
  selectedBookId: string = '';



  // deleteSelectedd(event: Number) {
  //   this._service.deleteBooks(this.selectedBookId)
  //   .subscribe((res : any) => {
  //     console.log(res)
     
  //   })
    
  // }

  deleteBooks() {
    this._service.deleteBookByid(this.selectedBookId)
      .subscribe((res: any) => {
        console.log(res)
        this.booklist;
      })
  }

  getPaginatedData(pageNumber: number) {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
    this.pageNumber = pageNumber;
    this.booklist = [...this.response.slice(startIndex, endIndex)];

    this.booklist.forEach((element: any) => {
      element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;
    });
  }

  previous() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.getPaginatedData(this.pageNumber);

    }

  }

  next() {
    if (this.pageNumber < this.noOfPage.length) {
      this.pageNumber = this.pageNumber + 1
      this.getPaginatedData(this.pageNumber);
    }
  }




  // sarch(val: any) {
  //   this.booklist = this.response.filter((res: any) => (res.bookName.includes(val)) || (res.category.includes(val)))
  // }
  pricesortup() {
    this.booklist = this.booklist.sort((a: any, b: any) => {
      return (a.pricing - b.pricing)

    })
  }
  pricesortdown() {
    this.booklist = this.booklist.sort((a: any, b: any) => {
      return (b.pricing - a.pricing)
    })

  }


  namesortup() {

    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName < y.bookName) {
        return -1;
      }
      if (x.bookName > y.bookName) {
        return 1;
      }
      return 0;
    });
  }

  namesortdown() {

    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName > y.bookName) {
        return -1;
      }
      if (x.bookName < y.bookName) {
        return 1;
      }
      return 0;
    });
  }




  categorysortup() {

    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName < y.bookName) {
        return -1;
      }
      if (x.bookName > y.bookName) {
        return 1;
      }
      return 0;
    });
  }

  categorysortdown() {

    this.booklist = this.booklist.sort((x, y) => {
      if (x.bookName > y.bookName) {
        return -1;
      }
      if (x.bookName < y.bookName) {
        return 1;
      }
      return 0;
    });




  }

///////////////////////////////////////////////////////////////////////////////////////////////////


  // getdata() {
  //   throw new Error('Method not implemented.');
  // }


  //   getdata(): void {
  //   this._service['getbooklist']()
  //   .subscribe((res: any) =>{
  //     console.log(res)

  //   })
  // }

  servicedata() {
    console.log(this._service.getDataList)
  }

}

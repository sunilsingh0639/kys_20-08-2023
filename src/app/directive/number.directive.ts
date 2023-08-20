import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  constructor() { }
  @HostListener('keypress', ['$event']) onKeyPress(event : KeyboardEvent) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
}
}

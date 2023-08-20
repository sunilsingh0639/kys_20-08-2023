import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event : KeyboardEvent) {
    const pattern = /[a-z\A-z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
}

}

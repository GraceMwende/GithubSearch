import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#E0E0E0';
  }
}

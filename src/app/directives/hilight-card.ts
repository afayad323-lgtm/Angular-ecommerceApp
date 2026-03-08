import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHilightCard]',
})
export class HilightCard {
  @Input() quantity!: number;

  constructor(private ele: ElementRef) {}
  ngOnInit() {
    if (this.quantity < 3) {
      this.ele.nativeElement.style.border = '3px solid red';
    }
  }
}

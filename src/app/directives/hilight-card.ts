import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHilightCard]',
})
export class HilightCard {
  @Input() quantity!: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngOnChanges() {
    if (this.quantity < 3) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}

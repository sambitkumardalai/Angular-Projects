import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,)
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHostBinding]",
})
export class HostBindingDirective {
  
  @HostBinding("style.backgroundColor") backgroundColor: string = "cyan";
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "yellow"
    );
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}

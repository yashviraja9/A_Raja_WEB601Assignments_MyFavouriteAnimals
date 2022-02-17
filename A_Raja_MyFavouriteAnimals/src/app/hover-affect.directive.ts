import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() eVal?: string;

  constructor(private elm: ElementRef) { 
    elm.nativeElement.style.cursor = "pointer";
  }

  @HostListener("mouseover") onMouseOver() {
    if(this.eVal == "type"){
      this.elm.nativeElement.style.textDecoration = "underline";
    }else if(this.eVal == "eOne"){
      this.elm.nativeElement.style.border = "4px solid black";
    }
     else {
      this.elm.nativeElement.style.fontWeight = "bold";
    }
  }

  @HostListener('mouseout') OnMouseleave(){
    this.elm.nativeElement.style.textDecoration="none";
    this.elm.nativeElement.style.fontWeight = "normal";
    this.elm.nativeElement.style.border = "";
  }
  
}

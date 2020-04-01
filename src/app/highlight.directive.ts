import { Directive,ElementRef, HostListener } from '@angular/core';
import { Quote } from "../quote";
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){ }
  @HostListener("click") onClicks()
  {
    this.highlightText("red")
  }
  @HostListener("dblclick") onDoubleClicks()
  {
    this.highlightText("transparent")
  }
private highlightText(action:string)
{
  this.elem.nativeElement.style.backgroundColor=action;
}
}

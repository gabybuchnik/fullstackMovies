import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appPaintAladin]'
})
export class PaintAladinDirective implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngAfterViewInit() {
    
    if(this.el.nativeElement.getElementsByClassName('movie-title')[0].innerText === 'test1'){
      this.renderer.addClass(this.el.nativeElement , 'paint');
    }
  }

}

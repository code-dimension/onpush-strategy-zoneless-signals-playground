import { Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: 'app-render-check',
})
export class RenderCheckDirective {
  private isFirstRender = true;

  hostEl = inject(ElementRef).nativeElement as HTMLElement;

  renderHash() {
    if (this.isFirstRender) {
      this.isFirstRender = false;
    } else {
      this.hostEl.classList.add('checked');
    }

    return Math.random();
  }
}

import { Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: 'app-render-check',
})
export class RenderCheckRootDirective {
  private counter = 0;

  hostEl = inject(ElementRef).nativeElement as HTMLElement;

  renderHash() {
    if (this.counter < 2) {
      this.counter += 1;
    } else {
      this.hostEl.classList.add('checked');
    }

    return Math.random();
  }
}

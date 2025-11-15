import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, signal } from '@angular/core';
import { Level1A } from './level1-a/level1-a';
import { Level1B } from './level1-b/level1-b';
import { RenderCheckDirective } from './render-check.directive';
import { RenderCheckRootDirective } from './render-check-root.directive';

@Component({
  selector: 'app-root',
  imports: [Level1A, Level1B],
  hostDirectives: [RenderCheckRootDirective],
  template: `
    <p>Raiz</p>

    <p>Counter: {{ counter() }}</p>

    <p>
      <button (click)="counter.set(counter() + 1)">Adicionar +1</button>
    </p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>

    <app-level1-a [(counter)]="counter"></app-level1-a>
    <app-level1-b [counter]="counter()"></app-level1-b>

  `,
  host: {
    class: 'component'
  }
})
export class App {
  renderCheckDirective = inject(RenderCheckRootDirective);

  protected readonly counter = signal(0);

  elementRef = inject(ElementRef<HTMLElement>);
  ChangeDetectorRef = inject(ChangeDetectorRef);
}

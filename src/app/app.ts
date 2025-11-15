import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, signal } from '@angular/core';
import { Level1A } from './level1-a/level1-a';
import { Level1B } from './level1-b/level1-b';
import { RenderCheckDirective } from './render-check.directive';

@Component({
  selector: 'app-root',
  imports: [Level1A, Level1B],
  hostDirectives: [RenderCheckDirective],
  template: `
    <div class="onpush">OnPush</div>

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
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  renderCheckDirective = inject(RenderCheckDirective);

  protected readonly counter = signal(0);

  elementRef = inject(ElementRef<HTMLElement>);
  ChangeDetectorRef = inject(ChangeDetectorRef);
}

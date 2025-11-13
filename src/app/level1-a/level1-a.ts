import { ChangeDetectionStrategy, Component, inject, input, model } from '@angular/core';
import { Level2A } from './level2-a/level2-a';
import { Level2B } from './level2-b/level2-b';
import { Level2C } from './level2-c/level2-c';
import { RenderCheckDirective } from '../render-check.directive';
import { Level2D } from './level2-d/level2-d';

@Component({
  selector: 'app-level1-a',
  hostDirectives: [RenderCheckDirective],
  imports: [Level2A, Level2B, Level2C, Level2D],
  template: `
    <p>Nível 1 - A</p>

    <p>Recebe Counter: {{ counter() }}</p>

    <p>
      <button (click)="counter.set(counter() + 1)">Adicionar +1</button>
    </p>

    {{ renderCheckDirective.renderHash() }}

    <app-level2-a></app-level2-a>
    <app-level2-b></app-level2-b>
    <app-level2-c (event)="eventHandler()"></app-level2-c>
    <app-level2-d [counter]="counter()"></app-level2-d>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'component',
  },
})
export class Level1A {
  renderCheckDirective = inject(RenderCheckDirective);

  counter = model.required<number>();

  eventHandler() {}
}

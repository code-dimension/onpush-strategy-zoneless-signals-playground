import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';
import { Level3A } from './level3-a/level2-d';

@Component({
  selector: 'app-level2-d',
  hostDirectives: [RenderCheckDirective],
  imports: [Level3A],
  template: `


    <p>Nível 2 - D</p>

    <p>Recebe Counter: {{ counter() }}</p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>

    <app-level3-a [counter]="counter()"></app-level3-a>
  `,
  styles: ``,

  host: {
    class: 'component',
  },
})
export class Level2D {
  renderCheckDirective = inject(RenderCheckDirective);

  event = output();

  counter = input.required<number>();
}

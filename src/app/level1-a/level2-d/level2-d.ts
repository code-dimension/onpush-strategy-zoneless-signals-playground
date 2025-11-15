import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';
import { Level3A } from './level3-a/level2-d';
import { Level3B } from "./level3-b/level3-b";

@Component({
  selector: 'app-level2-d',
  hostDirectives: [RenderCheckDirective],
  imports: [Level3A, Level3B],
  template: `
    <div class="onpush">OnPush</div>

    <p>Nível 2 - D</p>

    <p>Recebe Counter: {{ counter() }}</p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>

    <app-level3-a [counter]="counter()"></app-level3-a>
    <app-level3-b></app-level3-b>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'component',
  },
})
export class Level2D {
  renderCheckDirective = inject(RenderCheckDirective);

  event = output();

  counter = input.required<number>();
}

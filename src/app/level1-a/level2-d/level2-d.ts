import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-d',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <div class="onpush">OnPush</div>

    <p>Nível 2 - D</p>

    <p>Recebe Counter: {{ counter() }}</p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>
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

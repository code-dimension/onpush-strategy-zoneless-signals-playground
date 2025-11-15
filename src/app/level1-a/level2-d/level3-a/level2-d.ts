import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RenderCheckDirective } from '../../../render-check.directive';

@Component({
  selector: 'app-level3-a',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <p>Nível 2 - D</p>

    <p>Recebe Counter: {{ counter() }}</p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>
  `,
  styles: ``,
  host: {
    class: 'component',
  },
})
export class Level3A {
  renderCheckDirective = inject(RenderCheckDirective);

  event = output();

  counter = input.required<number>();
}

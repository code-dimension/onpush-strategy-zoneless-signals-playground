import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-a',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <p>Nível 2 - A</p>

    <p>
      Recebe Counter: {{  counter() }}
    </p>

    {{ renderCheckDirective.renderHash() }}
  `,
  styles: ``,
  host: {
    class: 'component',
  },
})
export class Level2A {
  renderCheckDirective = inject(RenderCheckDirective);

  counter = input.required<number>();
}

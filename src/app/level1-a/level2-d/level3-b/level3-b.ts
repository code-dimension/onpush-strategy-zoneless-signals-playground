import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RenderCheckDirective } from '../../../render-check.directive';

@Component({
  selector: 'app-level3-b',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <p>Nível 2 - D</p>

    <p>Não tem input</p>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>
  `,
  styles: ``,
  host: {
    class: 'component',
  },
})
export class Level3B {
  renderCheckDirective = inject(RenderCheckDirective);
}

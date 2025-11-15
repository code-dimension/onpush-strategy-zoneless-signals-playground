import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-a',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <div class="onpush">OnPush</div>

    <p>Nível 2 - A</p>

    <p>
      Não tem input ou output
    </p>

    {{ renderCheckDirective.renderHash() }}
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'component',
  },
})
export class Level2A {
  renderCheckDirective = inject(RenderCheckDirective);
}

import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RenderCheckDirective } from '../render-check.directive';

@Component({
  selector: 'app-level1-b',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <div class="onpush">OnPush</div>

    <p>Nível 1 - B</p>

    <p>
      Recebe Counter: {{  counter() }}
    </p>

    {{ renderCheckDirective.renderHash() }}
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'component',
  },
})
export class Level1B {
  renderCheckDirective = inject(RenderCheckDirective);

  counter = input.required<number>();
}

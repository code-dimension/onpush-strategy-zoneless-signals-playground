import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RenderCheckDirective } from '../render-check.directive';
import { Level2A } from "./level2-a/level1-b";

@Component({
  selector: 'app-level1-b',
  hostDirectives: [RenderCheckDirective],
  imports: [Level2A],
  template: `
    <p>Nível 1 - B</p>

    <p>
      Recebe Counter: {{  counter() }}
    </p>

    {{ renderCheckDirective.renderHash() }}

    <app-level2-a [counter]="counter()"></app-level2-a>
  `,
  styles: ``,
  host: {
    class: 'component',
  },
})
export class Level1B {
  renderCheckDirective = inject(RenderCheckDirective);

  counter = input.required<number>();
}

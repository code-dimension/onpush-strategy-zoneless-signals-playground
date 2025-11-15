import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-b',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `


    <p>Nível 2 - B</p>

    <button (click)="event.emit()">Emitir evento (não está sendo escutado)</button>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>
  `,
  styles: ``,

  host: {
    class: 'component',
  },
})
export class Level2B {
  renderCheckDirective = inject(RenderCheckDirective);

  event = output();
}

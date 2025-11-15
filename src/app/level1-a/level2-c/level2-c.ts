import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-c',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `


    <p>Nível 2 - C</p>

    <button (click)="event.emit()">Emitir evento (está sendo escutado)</button>

    <p>
      {{ renderCheckDirective.renderHash() }}
    </p>
  `,
  styles: ``,

  host: {
    class: 'component',
  },
})
export class Level2C {
  renderCheckDirective = inject(RenderCheckDirective);
  event = output();


}

import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RenderCheckDirective } from '../../render-check.directive';

@Component({
  selector: 'app-level2-c',
  hostDirectives: [RenderCheckDirective],
  imports: [],
  template: `
    <div class="onpush">OnPush</div>

    <p>Nível 2 - C</p>

    <button (click)="event.emit()">Emitir evento (está sendo escutado)</button>

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
export class Level2C {
  renderCheckDirective = inject(RenderCheckDirective);
  event = output();


}

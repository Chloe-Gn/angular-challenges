import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="border-grey-300 flex justify-between border px-2 py-1">
      <ng-content />
      <button (click)="delete.emit()">
        <img class="h-5" src="assets/svg/trash.svg" alt="trash" />
      </button>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ListItemComponent {
  delete = output<void>();

  readonly id = input<number>();
  readonly name = input<string>();
}

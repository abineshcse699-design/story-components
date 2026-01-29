import {ChangeDetectionStrategy, Component, computed, input, output} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {ToggleOption} from '../../models';

@Component({
  selector: 'upov-toggle',
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toggle {
  ariaLabel = input<string>('Toggle options');
  /**
   * name attribute for the underlying input element.
   */
  name = input<string>('toggle-group');
  /**
   * Value of the toggle group.
   */
  value = input<string | number | boolean | null>(null);
  /**
   * The toggle options to be displayed
   */
  options = input<ToggleOption[]>();
  /**
   * Emits the selected toggle options when changed
   */
  change = output<ToggleOption[]>();

  private activeOption = computed<ToggleOption | undefined>(() => {
    return this.options()?.find((opt) => opt.active) || undefined;
  });

  protected currentValue = computed(() => {
    return this.value() ?? this.activeOption()?.value ?? null;
  })

  onChange($event: MatButtonToggleChange) {
    this.change.emit(this.options()?.filter(opt => opt.value === $event.value) || []);
  }
}

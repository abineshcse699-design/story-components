import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface AutocompleteOption {
  value: string;
  description?: string;
}

export interface ToggleOption {
  label: string;
  value: string;
  active?: boolean;
}

@Component({
  selector: 'upov-input-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  templateUrl: './genie-search.html',
  styleUrl: './genie-search.scss',
})
export class GenieSearchComponent {
  /* ================= INPUTS ================= */
  @Input() placeholder = 'Search...';
  @Input() clearable = true;
  @Input() submitOnSelect = false;

  // 🔴 FIXED TYPE — ALWAYS ITERABLE
  @Input() autocomplete: Array<AutocompleteOption | string> = [];

  @Input() toggleOptions: ToggleOption[] = [];

  /* ================= OUTPUTS ================= */
  @Output() valueChange = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<string>();
  @Output() toggleChange = new EventEmitter<ToggleOption>();

  /* ================= STATE ================= */
  control = new FormControl('');
  showAutocomplete = false;
  activeToggle?: ToggleOption;

  constructor() {
    this.control.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        const val = value ?? '';
        this.valueChange.emit(val);
        this.showAutocomplete = !!val && this.autocomplete.length > 0;
      });
  }

  /* ================= ACTIONS ================= */
  onSubmit(): void {
    const value = this.control.value?.trim();
    if (!value) return;

    this.showAutocomplete = false;
    this.submitted.emit(value);
  }

  selectOption(option: AutocompleteOption | string): void {
    const value = this.getOptionValue(option);

    this.control.setValue(value, { emitEvent: false });
    this.showAutocomplete = false;

    if (this.submitOnSelect) {
      this.submitted.emit(value);
    }
  }

  clear(): void {
    this.control.setValue('', { emitEvent: false });
    this.showAutocomplete = false;
    this.valueChange.emit('');
  }

  onToggleSelect(option: ToggleOption): void {
    this.toggleOptions.forEach(t => (t.active = false));
    option.active = true;

    this.activeToggle = option;
    this.toggleChange.emit(option);
  }

  /* ================= TEMPLATE HELPERS ================= */
  getOptionValue(option: AutocompleteOption | string): string {
    return typeof option === 'string' ? option : option.value;
  }

  getOptionDescription(option: AutocompleteOption | string): string | null {
    return typeof option === 'string' ? null : option.description ?? null;
  }
}

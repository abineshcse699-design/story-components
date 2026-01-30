import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

export interface ToggleOption {
  label: string;
  value: string;
  active?: boolean;
}

export interface AutocompleteOption {
  value: string;
  description?: string;
  payload?: any;
}

type AutocompleteInput = string | AutocompleteOption;

@Component({
  selector: 'upov-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder = 'Search…';
  @Input() clearable = true;

  @Input() toggleOptions: ToggleOption[] = [];

  /** ✅ accepts strings OR objects */
  @Input() autocomplete: AutocompleteInput[] = [];

  /** { species: 3, authorities: 2 } */
  @Input() minLengthByToggle: Record<string, number> = {};

  @Output() searchValue = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<{ value: string; toggle: string }>();
  @Output() toggleChange = new EventEmitter<ToggleOption>();
  @Output() optionSelected = new EventEmitter<AutocompleteOption>();

  searchControl = new FormControl('');
  activeToggle = signal<string | null>(null);
  showAutocomplete = signal(false);

  ngOnInit() {
    const active =
      this.toggleOptions.find(t => t.active) ?? this.toggleOptions[0];
    this.activeToggle.set(active?.value ?? null);

    this.searchControl.valueChanges.subscribe(value => {
      const min =
        this.minLengthByToggle[this.activeToggle() ?? ''] ?? 0;

      this.showAutocomplete.set(
        !!value && value.length >= min
      );

      this.searchValue.emit(value ?? '');
    });
  }

  onToggleSelect(option: ToggleOption) {
    this.activeToggle.set(option.value);
    this.toggleChange.emit(option);
    this.searchControl.updateValueAndValidity();
  }

  submit() {
    const value = this.searchControl.value?.trim();
    if (!value || !this.activeToggle()) return;

    this.showAutocomplete.set(false);

    this.submitted.emit({
      value,
      toggle: this.activeToggle()!
    });
  }

  /** ✅ normalize string → object */
  selectOption(option: AutocompleteInput) {
    const normalized: AutocompleteOption =
      typeof option === 'string' ? { value: option } : option;

    this.searchControl.setValue(normalized.value, { emitEvent: false });
    this.showAutocomplete.set(false);
    this.optionSelected.emit(normalized);
  }

  clear() {
    this.searchControl.setValue('');
    this.showAutocomplete.set(false);
  }

  hideAutocomplete() {
    setTimeout(() => this.showAutocomplete.set(false), 150);
  }

  /** helper for template */
  asOption(option: AutocompleteInput): AutocompleteOption {
    return typeof option === 'string' ? { value: option } : option;
  }
}

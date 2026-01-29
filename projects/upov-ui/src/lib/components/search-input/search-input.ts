import {ChangeDetectionStrategy, Component, computed, inject, input, output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';
import {normalizeString} from '../../utils';
import {AutocompleteOption, ToggleOption} from '../../models';
import {Toggle} from '../toggle/toggle';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'upov-search-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    Toggle,
    MatIcon,
  ],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  /**
   * The placeholder text for the search input field
   */
  placeholder = input<string>('Search');
  /**
   * The options to be displayed in the autocomplete dropdown. It can be an array of strings or AutocompleteOption objects,
   */
  autocomplete = input<AutocompleteOption[] | string[]>();
  /**
   * If true, the search will be submitted automatically when an option is selected from the autocomplete dropdown
   */
  submitOnOptionSelect = input<boolean>(false);
  /**
   * The toggle options to be displayed alongside the search input
   */
  toggleOptions = input<ToggleOption[]>([]);
  /**
   * If true, a clear button will be displayed to clear the search input
   */
  clereable = input<boolean>(true);
  /**
   * Emits the input value while user types the value in the search box
   */
  searchValue = output<string>();
  /**
   * Emits the input value when user clicks on the search button or presses enter
   */
  submitted = output<string>();
  /**
   * Emits the selected toggle option when changed
   */
  toggleChange = output<ToggleOption[]>();

  searchControl = new FormControl('');
  filteredOptions = signal<AutocompleteOption[]>([]);
  currentSearchValue = signal<string>('');
  autocompleteOptions = computed<AutocompleteOption[]>(() => {
    if (Array.isArray(this.autocomplete())) {
      return this.autocomplete()?.map(option => {
        if (typeof option === 'string') {
          return {value: option};
        }
        return option;
      }) || [];
    }
    return [];
  })
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const searchValue = value || '';
        this.currentSearchValue.set(searchValue);
        this.searchValue.emit(searchValue);
        return this.filterOptions(searchValue);
      })
    ).subscribe((filtered) => {
      this.filteredOptions.set(filtered as any);
    });
  }

  onSearch() {
    this.submitted.emit(this.searchControl.value || '');
  }

  onSelect() {
    if (this.submitOnOptionSelect()) {
      this.submitted.emit(this.searchControl.value || '');
    }
  }

  /**
   * Highlights the search text within the option value, ignores case and accents.
   */
  highlightText(text: string, searchValue: string): SafeHtml {
    if (!searchValue || !text) {
      return text;
    }
    const normalizedText = normalizeString(text);
    const normalizedSearch = normalizeString(searchValue);
    if (!normalizedText.includes(normalizedSearch)) {
      return text;
    }

    // Find all matches in normalized text and highlight corresponding positions in original text
    let highlightedText = text;
    let searchIndex = 0;
    const matches: { start: number; end: number }[] = [];

    while (searchIndex < normalizedText.length) {
      const matchIndex = normalizedText.indexOf(normalizedSearch, searchIndex);
      if (matchIndex === -1) break;
      matches.push({
        start: matchIndex,
        end: matchIndex + normalizedSearch.length
      });
      searchIndex = matchIndex + 1;
    }

    // Apply highlighting from end to start to avoid position shifts
    for (let i = matches.length - 1; i >= 0; i--) {
      const {start, end} = matches[i];
      const originalMatch = text.substring(start, end);
      highlightedText = `${highlightedText.substring(0, start)}<mark class="search-highlight">${originalMatch}</mark>${highlightedText.substring(end)}`;
    }

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  private filterOptions(value: string = ''): AutocompleteOption[] {
    if (!value) {
      return [];
    }
    const filterValue = normalizeString(value);
    return this.autocompleteOptions()?.filter((option) => {
      const opt = normalizeString(option.value);
      return opt.includes(filterValue);
    }) || [];
  }

  protected clearSearch() {
    this.searchControl.setValue('');
  }

  protected selectedToggleValue = signal<ToggleOption['value'] | null>(null);

  protected onToggleChange($event: ToggleOption[]) {
    this.selectedToggleValue.set($event.length > 0 ? $event[0].value : null);
    this.toggleChange.emit($event);
  }
}

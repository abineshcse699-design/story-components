import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AutocompleteItem {
  main: string;
  sub?: string;
}

@Component({
  selector: 'upov-autocomplete-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autocomplete-list.html',
  styleUrl: './autocomplete-list.scss',
})
export class AutocompleteList {
  @Input() items: AutocompleteItem[] = [];
  @Input() loading = false;
  @Input() emptyText = 'No matches found';
  @Input() emptyHint = 'Try a different search term';

  @Output() select = new EventEmitter<AutocompleteItem>();

  onSelect(item: AutocompleteItem) {
    this.select.emit(item);
  }
}

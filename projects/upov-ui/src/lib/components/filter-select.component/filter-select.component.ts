import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

export interface FilterSelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'upov-filter-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatIconModule],
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss'],
})
export class FilterSelect {
  @Input() placeholder = 'Select';
  @Input() options: FilterSelectOption[] = [];
  @Input() multiple = true;
  @Input() value: string[] = [];

  @Output() valueChange = new EventEmitter<string[]>();

  onSelectionChange(values: string[]) {
    this.value = values;
    this.valueChange.emit(values);
  }
}

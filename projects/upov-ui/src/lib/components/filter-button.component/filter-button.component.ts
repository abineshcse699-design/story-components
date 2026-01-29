import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'upov-filter-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  @Input() active = false;
  @Input() label = 'Filters';

  @Output() toggle = new EventEmitter<boolean>();

  onToggle() {
    this.active = !this.active;
    this.toggle.emit(this.active);
  }
}


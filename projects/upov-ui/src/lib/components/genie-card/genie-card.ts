import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SearchResultDto } from '../genie-card/genie.type';

@Component({
  selector: 'upov-genie-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './genie-card.html',
  styleUrl: './genie-card.scss'
})
export class GenieCardComponent {

  @Input() species!: SearchResultDto;
  @Output() cardClick = new EventEmitter<SearchResultDto>();

  onCardClick(): void {
    this.cardClick.emit(this.species);
  }
}

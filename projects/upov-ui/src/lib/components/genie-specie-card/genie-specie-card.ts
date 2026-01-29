// ===============================
// genie-species-card.component.ts
// ===============================
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'genie-specie-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './genie-specie-card.html',
  styleUrls: ['./genie-specie-card.scss'],
})
export class GenieSpeciesCardComponent {
  @Input() upovCode!: string;
  @Input() botanicalName!: string;
  @Input() family?: string;
  @Input() cropType?: string;
  @Input() imageUrl?: string;
  @Input() updated = false;

  imageError = false;

  onImageError(): void {
    this.imageError = true;
    
  }
}

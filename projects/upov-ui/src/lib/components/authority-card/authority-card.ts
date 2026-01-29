import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-authority-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './authority-card.html',
  styleUrls: ['./authority-card.scss'],

})

export class AuthorityCard {
  @Input() countryName = '';
  @Input() countryIso = '';
  @Input() flagUrl = '';

  @Input() authorityName = '';
  @Input() department = '';

  @Input() phone?: string;
  @Input() email?: string;
  @Input() website?: string;

  @Input() coverageType?: string;
  @Input() memberSince?: string;
  
}

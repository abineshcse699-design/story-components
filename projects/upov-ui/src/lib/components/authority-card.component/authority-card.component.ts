import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-authority-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './authority-card.component.html',
  styleUrls: ['./authority-card.component.scss'],
})
export class AuthorityCard {
  @Input() countryName = '';
  @Input() isoCode = '';
  @Input() flagUrl: string | null = null;

  @Input() authorityName = '';
  @Input() department = '';

  @Input() email = '';
  @Input() phone = '';
  @Input() website = '';

  @Input() badge: string | null = null;
  @Input() clickable = false;

}


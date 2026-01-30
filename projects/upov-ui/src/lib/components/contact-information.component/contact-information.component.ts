import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-contact-information',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent {
  @Input() title = 'Contact information';

  @Input() registrar = '';
  @Input() department = '';
  @Input() country = '';

  @Input() phone = '';
  @Input() email = '';
  @Input() website = '';
}

import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'upov-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'upov-hero-section',
    role: 'banner',
  },
})
export class HeroSection {
  /**
   * Title of the hero section. If not provided, projected content with the `hero-title` directive can be used.
   */
  title = input<string | undefined>(undefined);
  /**
   * Subtitle of the hero section. If not provided, projected content with the `hero-subtitle` directive can be used.
   */
  subtitle = input<string | undefined>(undefined);
}

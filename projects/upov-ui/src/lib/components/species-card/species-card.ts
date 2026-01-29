import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {TruncatedText} from '../truncated-text/truncated-text';

@Component({
  selector: 'upov-species-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatBadge,
    TruncatedText,
  ],
  templateUrl: './species-card.html',
  styleUrl: './species-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesCard {
  static noImageSvgUrl = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' xml:space=\'preserve\' style=\'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2\' viewBox=\'0 0 1068 1068\'%3E%3Cpath d=\'M1085 1794h1370v1370H1085z\' style=\'fill:none\' transform=\'translate(-845.825 -1398.534) scale(.77956)\'/%3E%3Cpath d=\'M448 303.472a132.009 132.009 0 0 0-32-10.449V64H32v272h13.18l79.2-105.59c6.06-8.07 19.56-8.07 25.62 0l47.19 62.91 71.19-94.91c6.06-8.07 19.56-8.07 25.62 0l71.113 94.81a131.954 131.954 0 0 0-31.959 10.719L281.2 234.67 205.2 336h85.893a133.262 133.262 0 0 0-20.829 32H32v80h228.285a131.924 131.924 0 0 0 10.272 32H32c-17.555 0-32-14.445-32-32V64c0-17.555 14.445-32 32-32h384c17.555 0 32 14.445 32 32v239.472ZM85.2 336h80l12-16-40-53.33-52 69.33ZM112 192c-26.332 0-48-21.668-48-48s21.668-48 48-48 48 21.668 48 48-21.668 48-48 48Zm0-64c-8.777 0-16 7.223-16 16 0 8.777 7.223 16 16 16 8.777 0 16-7.223 16-16 0-8.777-7.223-16-16-16Z\' style=\'fill-opacity:.25;fill-rule:nonzero\' transform=\'translate(314.937 281.315)\'/%3E%3Cpath d=\'m193.94 256 123.71-123.71c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94l123.71 123.71c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256Z\' style=\'fill-opacity:.25;fill-rule:nonzero\' transform=\'matrix(.38436 0 0 .38436 646.942 605.422)\'/%3E%3Cpath d=\'M2283 1338.667c59.239 0 107.333 48.094 107.333 107.333s-48.094 107.333-107.333 107.333-107.333-48.094-107.333-107.333 48.094-107.333 107.333-107.333Zm0 16.666c-50.04 0-90.667 40.627-90.667 90.667s40.627 90.667 90.667 90.667 90.667-40.627 90.667-90.667-40.627-90.667-90.667-90.667Z\' style=\'fill-opacity:.25\' transform=\'translate(-1767.432 -864.248) scale(1.08385)\'/%3E%3C/svg%3E';
  speccyIcon = input<string>();
  speccyTitle = input<string>();
  speccyImage = input<string | null>(null);
  family = input<string | null>(null);
  title = input<string>();
  subtitle = input<string>();
  badge = input<string | number>();
  variants = input<string>();

  backgroundImage = computed(() => {
    if (this.speccyImage()) {
      return `url(${this.speccyImage()}), url("${SpeciesCard.noImageSvgUrl}")`;
    }
    return null;
  });
}

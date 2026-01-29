import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {Logo} from '../logo/logo';
import {MatIcon} from '@angular/material/icon';
import {IconHelper} from '../../services';
import {MatIconButton} from '@angular/material/button';
import {Button} from '../../directives';
import {FOOTER_CONFIG, type LinkItem} from '../../core/footer-config.token';

@Component({
  selector: 'upov-footer',
  imports: [
    Logo,
    MatIcon,
    MatIconButton,
    Button,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private footerConfig = inject(FOOTER_CONFIG);
  private iconHelper = inject(IconHelper);

  socialLinks = input<LinkItem[]>(this.footerConfig.socialLinks ?? []);
  footerLinks = input<LinkItem[]>(this.footerConfig.footerLinks ?? []);
  footerText = computed<string>(() => {
    return this.footerConfig.footerText || '';
  });

  isSvgIcon(iconName: string): boolean {
    return this.iconHelper.isSvgIcon(iconName);
  }
}

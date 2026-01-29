import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {Logo} from '../logo/logo';
import {HeaderNav} from '../header-nav/header-nav';
import {HeaderNavigation} from '../../models';

@Component({
  selector: 'upov-header',
  imports: [
    Logo,
    HeaderNav,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  navigation = input<HeaderNavigation | undefined>();

  navigationItems = computed(() => this.navigation() ?? []);
}

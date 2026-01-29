import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {HeaderNavigationItem} from '../../models';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Button} from '../../directives';

@Component({
  selector: 'upov-header-nav',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    Button,
    
  ],

  templateUrl: './header-nav.html',
  styleUrl: './header-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class HeaderNav {
  items = input.required<HeaderNavigationItem[]>();

}


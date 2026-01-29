import {Component} from '@angular/core';
import {Footer, Header, HeaderNavigation} from 'upov-ui';


@Component({

  selector: 'app-root',
  imports: [Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'

})

 export class App {
   nav: HeaderNavigation = [
    {label: 'Home', link: '/'},
    {
      label: 'Find & Explore',
      link: '/find',
      children: [
        {label: 'Menu A', link: '/a'},
        {label: 'Menu B', link: '/b'},
      ],
    },
    {label: 'About', link: '/about'},
    {label: 'Contact', link: '/contact'},
  ];

}

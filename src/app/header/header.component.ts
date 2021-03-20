import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLink: string = null;

  constructor(private router: Router) {
    // const state = this.router.getCurrentNavigation().extras.state;
    router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          const path= event.url.split('/');
          this.currentLink = path[1];
        }
      })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuState:boolean
  constructor (private router: Router, private route: ActivatedRoute) {
   this.menuState = false
  }

  currentUrl: string | undefined = undefined;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  isCurrentUrl(pattern: string): boolean {
    // console.log(!!this.currentUrl && this.currentUrl.includes(pattern))
    return this.currentUrl == pattern;
  }


  navMenuState(menuState: boolean) { this.menuState = !this.menuState }
}

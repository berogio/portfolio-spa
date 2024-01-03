// header.component.ts

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbar', { static: true }) private navbar!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          this.scrollToSection(fragment);
        }
      });
  }

  scrollToSection(section: string): void {
    console.log('gio');
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}

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
  isMenuOpen = false;
  navLinks = [
    {
      label: 'Skills',
      routerLink: '/skills',
      section: 'skills',
      icon: 'material-symbols-outlined',
      iconName: 'star_half',
    },
    {
      label: 'Experience',
      routerLink: '/experience',
      section: 'experience',
      icon: 'material-symbols-outlined',
      iconName: ' settings',
    },
    {
      label: 'About Me',
      routerLink: '/about',
      section: 'about',
      icon: 'material-symbols-outlined',
      iconName: 'face',
    },
    {
      label: 'Contact Me',
      routerLink: '/contact',
      section: 'contact',
      icon: 'material-symbols-outlined',
      iconName: 'phone_enabled',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

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
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      setTimeout(() => {
        this.isMenuOpen = !this.isMenuOpen;
      }, 400);
    }
  }
}

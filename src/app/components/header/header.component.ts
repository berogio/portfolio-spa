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
    { label: 'Skills', routerLink: '/skills', section: 'skills' },
    { label: 'Experience', routerLink: '/experience', section: 'experience' },
    { label: 'About Me', routerLink: '/about', section: 'about' },
    { label: 'Contact Me', routerLink: '/contact', section: 'contact' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Hier wird die "open" Klasse basierend auf dem Menüstatus hinzugefügt oder entfernt
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
      burgerMenu.classList.toggle('open', this.isMenuOpen);
    }
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
    }
  }
}

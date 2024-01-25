import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavLink } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbar', { static: true }) private navbar!: ElementRef;
  isMenuOpen = false;
  selectedLanguage = 'EN';
  isDropdownOpen = false;

  navLinks = [
    {
      label: '',
      routerLink: '/skills',
      section: 'skills',
      icon: 'material-symbols-outlined',
      iconName: 'star_half',
    },
    {
      label: '',
      routerLink: '/experience',
      section: 'experience',
      icon: 'material-symbols-outlined',
      iconName: ' settings',
    },
    {
      label: '',
      routerLink: '/projects',
      section: 'my-projects',
      icon: 'material-symbols-outlined',
      iconName: 'phone_enabled',
    },
    {
      label: '',
      routerLink: '/about',
      section: 'about',
      icon: 'material-symbols-outlined',
      iconName: 'face',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.loadNavLinks();
  }

  loadNavLinks() {
    this.servicesService.getNav().subscribe({
      next: (data: NavLink[]) => {
        this.navLinks.forEach((staticLink, index) => {
          if (data[index]) {
            staticLink.label = data[index].label;
          }
        });
      },
      error: (error) => {
        console.error('Error loading navigation:', error);
      },
    });
  }

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
      console.log('fragment', element);
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

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language.toLocaleUpperCase();
    this.isDropdownOpen = false;
  }
}

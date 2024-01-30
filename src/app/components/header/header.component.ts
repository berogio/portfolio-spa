import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavLink } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';
import { PasswordModalComponent } from '../modals/password-modal/password-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbar', { static: true }) private navbar!: ElementRef;
  isMenuOpen = false;
  isDropdownOpen = false;
  resumeText: string;

  selectedLanguage: string =
    localStorage.getItem('selectedLanguage')?.toLocaleUpperCase() || 'EN';

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
      iconName: 'storage',
    },
    {
      label: '',
      routerLink: '/about',
      section: 'about',
      icon: 'material-symbols-outlined',
      iconName: 'info',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private translationService: TranslationService,
    public dialog: MatDialog
  ) {
    this.resumeText = this.translationService.getTranslation('resume');
    this.loadNavItems();
  }

  loadNavItems() {
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

  selectLanguage(language: string) {
    this.isDropdownOpen = false;
    window.location.reload();
    localStorage.setItem('selectedLanguage', language.toLocaleLowerCase());
  }

  openDownloadFormDialog(): void {
    this.dialog.open(PasswordModalComponent, {
      width: '280px',
      backdropClass: 'custom-backdrop',
    });
  }
}

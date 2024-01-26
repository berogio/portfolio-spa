import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  About: Card[] = [];

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.loadAbout();
  }

  loadAbout() {
    this.servicesService.getAbout().subscribe({
      next: (data: Card[]) => {
        this.About = data;
      },
      error: (error) => {
        console.error('Error loading experiences:', error);
      },
    });
  }
  getEducations(): { prefix: string; suffix: string } {
    const experience = this.translationService.getTranslation('myEducation');
    const parts = experience.split(' ');
    return { prefix: parts[0], suffix: parts[1] };
  }
}

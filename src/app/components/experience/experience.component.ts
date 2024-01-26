import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences() {
    this.servicesService.getAllExperiences().subscribe({
      next: (data: WorkExperience[]) => {
        this.experiences = data;
      },
      error: (error) => {
        console.error('Error loading experiences:', error);
      },
    });
  }
  getExperience(): { prefix: string; suffix: string } {
    const experience = this.translationService.getTranslation('myExperience');
    const parts = experience.split(' ');
    return { prefix: parts[0], suffix: parts[1] };
  }
}

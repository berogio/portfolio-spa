import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperience } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences$: Observable<WorkExperience[]>;

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {
    this.experiences$ = this.servicesService.getAllExperiences();
  }

  getExperience(): { prefix: string; suffix: string } {
    const experience = this.translationService.getTranslation('myExperience');
    const parts = experience.split(' ');
    return { prefix: parts[0], suffix: parts[1] };
  }
}

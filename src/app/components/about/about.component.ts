import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  About$: Observable<Card[]>;
  educationText: string;

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {
    this.About$ = this.servicesService.getAbout();
    this.educationText = this.translationService.getTranslation('myEducation');
  }
}

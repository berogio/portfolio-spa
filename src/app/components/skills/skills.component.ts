import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills$!: Observable<Skills[]>;
  competency: string;

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {
    this.skills$ = this.servicesService.getSkills();
    this.competency = this.translationService.getTranslation('myCompetency');
  }

  isRotated: boolean[] = [];

  rotateDiv(index: number) {
    this.isRotated[index] = !this.isRotated[index];
  }
}

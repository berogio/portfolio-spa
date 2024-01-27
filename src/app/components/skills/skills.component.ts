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

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {
    this.skills$ = this.servicesService.getSkills();
  }

  isRotated: boolean[] = [];

  rotateDiv(index: number) {
    this.isRotated[index] = !this.isRotated[index];
  }

  getCompetency(): { prefix: string; suffix: string } {
    const experience = this.translationService.getTranslation('myCompetency');
    const parts = experience.split(' ');
    return { prefix: parts[0], suffix: parts[1] };
  }
}

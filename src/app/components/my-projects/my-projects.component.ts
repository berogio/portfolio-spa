import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent {
  projects: Project[] = [];
  projects$!: Observable<Project[]>;
  projecText: string;

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {
    this.projects$ = this.servicesService.getProjects();
    this.projecText = this.translationService.getTranslation('myProjects');
  }
}

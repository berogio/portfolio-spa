import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private servicesService: ServicesService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.servicesService.getProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      },
    });
  }

  getProject(): string {
    return this.translationService.getTranslation('myProjects');
  }
}

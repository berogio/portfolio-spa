import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(private servicesService: ServicesService) {}

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
}

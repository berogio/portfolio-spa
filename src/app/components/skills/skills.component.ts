import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  Skills: Skills[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills() {
    this.servicesService.getSkills().subscribe({
      next: (data: Skills[]) => {
        this.Skills = data;
      },
      error: (error) => {
        console.error('Error loading experiences:', error);
      },
    });
  }

  isRotated: boolean[] = Array(this.Skills.length).fill(false);

  rotateDiv(index: number) {
    this.isRotated[index] = !this.isRotated[index];
  }
}

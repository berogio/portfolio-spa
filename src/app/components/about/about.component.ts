import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  About: Card[] = [];

  constructor(private servicesService: ServicesService) {}

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
}

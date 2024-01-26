import { Component, OnInit } from '@angular/core';
import { WelcomeData } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  welcomeData: WelcomeData | undefined;
  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.loadWelcomeData();
  }

  loadWelcomeData() {
    this.servicesService.getWelcome().subscribe({
      next: (data: WelcomeData[]) => {
        if (data.length > 0) {
          this.welcomeData = data[0];
        }
      },
      error: (error) => {
        console.error('Error loading welcome data:', error);
      },
    });
  }
}

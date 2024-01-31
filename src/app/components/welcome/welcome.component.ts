import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WelcomeData } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  welcomeData$: Observable<WelcomeData[]>;

  constructor(private servicesService: ServicesService) {
    this.welcomeData$ = this.servicesService.getWelcome();
  }
}

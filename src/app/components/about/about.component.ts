import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Card {
  imageUrl: string;
  altText: string;
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  text5?: string;
  website?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  contactForm!: FormGroup;
  cards: Card[] = [
    {
      imageUrl: '/assets/images/AgrUniLogo.png',
      altText: 'Bildbeschreibung 1',
      text1: 'Agricultural University',
      text2: '🟢 - Automation Systems and Controls',
      text3: '🟢 - Emerging Technologies Integration',
      text4: '🟢 - Computer Engineering',
      website: 'https://agruni.edu.ge',
    },
    {
      imageUrl: '/assets/images/logo-bitcamp.jpg',
      altText: 'Bildbeschreibung 2',
      text1: 'Bootcamp',
      text2: '🔴 - Front-End, Responsive Design ',
      text3: '🔴 - Back-End API Communication',
      text4: '🔴 - Servers and Databases',
      website: '',
    },
    {
      imageUrl: '/assets/images/TbcLogo.png',
      altText: 'Bildbeschreibung 3',
      text1: 'TBC x USAID ',
      text2: '🔵 - Introduction to DevOps',
      text3: '🔵 - Cloud Technologies',
      text4: '🔵 - Infrastructure As Code (IaC)',
      text5: 'notice: I`m currently in the learning phase',
      website: 'https://www.tbcacademy.ge',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {}
}

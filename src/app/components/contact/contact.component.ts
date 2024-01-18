import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Card {
  imageUrl: string;
  altText: string;
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  cards: Card[] = [
    {
      imageUrl: '/assets/images/Ellipse 2664.png',
      altText: 'Bildbeschreibung 1',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      imageUrl: '/assets/images/Ellipse 26644.png',
      altText: 'Bildbeschreibung 2',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      imageUrl: '/assets/images/Ellipse 2664.png',
      altText: 'Bildbeschreibung 3',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
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

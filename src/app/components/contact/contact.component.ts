import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup; // Non-null Assertion Operator

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

  submitForm() {
    // Hier kannst du die Logik für die Formularübermittlung hinzufügen
    // z.B., das Senden der Daten an einen Server
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-kontakt-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss'],
})
export class KontaktModalComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<KontaktModalComponent>,
    private fb: FormBuilder,
    private servicesService: ServicesService
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm() {
    const formData = this.contactForm.value;

    this.servicesService.postContact(formData).subscribe({
      next: (response) => {
        console.log('Antwort vom Server:', response);
      },
      error: (error) => {
        console.error(error);
        console.error(error.error);
      },
    });
  }

  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
}

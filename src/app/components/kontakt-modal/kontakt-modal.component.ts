import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslationService } from 'src/app/services/translation-service.service';

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
    private servicesService: ServicesService,
    private snackBar: MatSnackBar,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.servicesService.postContact(formData).subscribe({
        next: () => {
          this.snackBar.open(
            this.translationService.getTranslation('messageSent'),
            'OK!',
            {
              duration: 4000,
            }
          );
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
          console.error(error.error);
        },
      });
    } else {
      this.snackBar.open(
        'Please fill out all required fields correctly.',
        'OK',
        {
          duration: 3000,
        }
      );
    }
  }

  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
  openEmail(emailAddress: string) {
    window.open(`mailto:${emailAddress}`, '_blank');
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  //translate service
  getCancel(): string {
    return this.translationService.getTranslation('cancel');
  }
  getSend(): string {
    return this.translationService.getTranslation('send');
  }
  getContact(): string {
    return this.translationService.getTranslation('contact');
  }
  getRequired(): string {
    return this.translationService.getTranslation('emailRequired');
  }
  getInvalid(): string {
    return this.translationService.getTranslation('emailInvalid');
  }
  getMRequired(): string {
    return this.translationService.getTranslation('messageRequired');
  }
  getMMinLength(): string {
    return this.translationService.getTranslation('messageMinLength');
  }

  getmessageSent(): string {
    return this.translationService.getTranslation('messageSent');
  }
}

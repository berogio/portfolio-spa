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
  translations: { [key: string]: string } = {};

  constructor(
    public dialogRef: MatDialogRef<KontaktModalComponent>,
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private snackBar: MatSnackBar,
    private translationService: TranslationService
  ) {
    this.translations = {
      cancelText: this.translationService.getTranslation('cancel'),
      sendText: this.translationService.getTranslation('send'),
      contactText: this.translationService.getTranslation('contact'),
      emailReqText: this.translationService.getTranslation('emailRequired'),
      emailInvText: this.translationService.getTranslation('emailInvalid'),
      messageReqText: this.translationService.getTranslation('messageRequired'),
      mesageMinText: this.translationService.getTranslation('messageMinLength'),
    };
  }

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
        },
      });
    } else {
      this.snackBar.open(
        this.translationService.getTranslation('requiredFields'),
        'OK',
        {
          duration: 4000,
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
}

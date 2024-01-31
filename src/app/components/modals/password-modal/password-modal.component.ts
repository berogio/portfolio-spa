import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/services/services.service';
import { TranslationService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent {
  translations: { [key: string]: string } = {};
  passwordForm: FormGroup;

  constructor(
    private translationService: TranslationService,
    private servicesService: ServicesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PasswordModalComponent>
  ) {
    this.translations = {
      confirmCode: this.translationService.getTranslation('confirmCode'),
      codeReceived: this.translationService.getTranslation('codeReceived'),
    };

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
    });

    this.passwordForm.valueChanges.subscribe((formValue) => {
      if (this.passwordForm.valid) {
        console.log(formValue);
        this.onSubmit(formValue);
      }
    });
  }

  onSubmit(formData: any) {
    this.servicesService.postResume(formData).subscribe({
      next: (response) => {
        console.log('Response from backend:', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error from backend:', error);
      },
    });
  }
}

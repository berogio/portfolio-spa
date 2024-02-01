import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Password, ResumeResponse } from 'src/app/interfaces/interfaces';
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
      password: ['', Validators.minLength(5)],
    });

    this.passwordForm.valueChanges.subscribe((formValue: Password) => {
      if (this.passwordForm.valid) {
        this.servicesService.postPassword(formValue).subscribe({
          next: (res: ResumeResponse) =>
            this.servicesService.OpenResume().subscribe(),
          error: (error) => console.error(error),
        });
      }
    });
  }
}

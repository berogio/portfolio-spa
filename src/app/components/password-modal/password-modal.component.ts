import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent {
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PasswordModalComponent>
  ) {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
    this.passwordForm.valueChanges.subscribe();
  }
}

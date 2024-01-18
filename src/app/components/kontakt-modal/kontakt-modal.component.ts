import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss'],
})
export class KontaktModalComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<KontaktModalComponent>,
    private fb: FormBuilder
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

  submitForm() {}

  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
}

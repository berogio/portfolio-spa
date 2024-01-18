import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kontakt-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss'],
})
export class KontaktModalComponent {
  constructor(private dialogRef: MatDialogRef<KontaktModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm() {}

  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
}

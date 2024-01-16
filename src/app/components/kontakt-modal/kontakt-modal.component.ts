import { Component } from '@angular/core';

@Component({
  selector: 'app-kontakt-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss'],
})
export class KontaktModalComponent {
  closeDialog() {
    throw new Error('Method not implemented.');
  }
  submitForm() {
    throw new Error('Method not implemented.');
  }
  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }
}

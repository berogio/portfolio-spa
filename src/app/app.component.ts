import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KontaktModalComponent } from './components/modals/kontakt-modal/kontakt-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openContactFormDialog(): void {
    this.dialog.open(KontaktModalComponent, {
      width: '310px',
      panelClass: 'custom-container',
      position: { bottom: '100px', right: '50px' },
    });
  }
}

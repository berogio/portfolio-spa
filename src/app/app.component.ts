import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KontaktModalComponent } from './components/kontakt-modal/kontakt-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openContactFormDialog(): void {
    const dialogRef = this.dialog.open(KontaktModalComponent, {
      width: '400px',
      position: { bottom: '100px', right: '50px' },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen');
    });
  }
}

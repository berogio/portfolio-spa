import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KontaktModalComponent } from './components/kontakt-modal/kontakt-modal.component';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    public loadingService: LoadingService
  ) {}

  openContactFormDialog(): void {
    const dialogRef = this.dialog.open(KontaktModalComponent, {
      width: '310px',
      panelClass: 'custom-container',
      position: { bottom: '100px', right: '50px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen');
    });
  }
}

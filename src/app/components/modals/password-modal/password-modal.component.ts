// password-modal.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent {
  translations: { [key: string]: string } = {};
  passwordForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PasswordModalComponent>
  ) {
    this.translations = {
      confirmCode: 'confirmCode', // Adjust this translation as needed
      codeReceived: 'codeReceived', // Adjust this translation as needed
    };

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
    });

    this.passwordForm.valueChanges.subscribe((formValue) => {
      if (this.passwordForm.valid) {
        this.onSubmit(formValue);
      }
    });
  }

  onSubmit(formData: any) {
    // Senden Sie eine HTTP-POST-Anfrage an den Server und erwarten Sie eine binäre Antwort (Blob)
    this.http
      .post('http://localhost:3000/resume', formData, { responseType: 'blob' })
      .subscribe({
        next: (response: Blob) => {
          // Hier können Sie die Antwort des Servers behandeln
          // Zum Beispiel: Überprüfen Sie, ob die Antwort gültig ist und die PDF-Datei enthält
          // Hier können Sie auch andere Aktionen ausführen, die nach dem Empfang der Antwort erforderlich sind
          console.log('Response from server:', response);

          // Öffnen Sie die PDF-Datei in einem neuen Tab oder laden Sie sie herunter
          const url = window.URL.createObjectURL(response);
          window.open(url);
        },
        error: (error) => {
          // Hier können Sie Fehlerbehandlung durchführen, wenn die Anfrage fehlschlägt
          console.error('Error from backend:', error);
        },
      });
  }

  downloadPdf() {
    this.http
      .post('http://localhost:3000/resume', FormData, {
        responseType: 'blob', // Setzen Sie den responseType auf 'blob'
      })
      .subscribe((data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url); // Öffnen Sie das PDF in einem neuen Tab oder initiieren Sie den Download
      });
  }
}

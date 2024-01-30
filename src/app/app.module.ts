import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { KontaktModalComponent } from './components/modals/kontakt-modal/kontakt-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './loading-interceptor.service';
import { PasswordModalComponent } from './components/modals/password-modal/password-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    AboutComponent,
    FooterComponent,
    MyProjectsComponent,
    KontaktModalComponent,
    WelcomeComponent,
    PasswordModalComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    LoadingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

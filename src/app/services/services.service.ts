import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import {
  WorkExperience,
  Project,
  Card,
  Skills,
  ContactFormData,
  WelcomeData,
  Password,
  ResumeResponse,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private baseUrl = 'https://portfolio-api-production-6224.up.railway.app';

  private language: any = localStorage.getItem('selectedLanguage') || 'en';

  private endpoints: any = {
    welcome: '/welcome',
    experiences: '/experiences',
    projects: '/projects',
    skills: '/skills',
    about: '/about',
    contact: '/contact',
    navigation: '/navigation',
    resume: '/resume',
  };

  constructor(private http: HttpClient) {}

  private createUrl(endpoint: string, language?: string): string {
    const endpointUrl = this.endpoints[endpoint];
    const lang = language || this.language;
    const languageParam = lang ? `?language=${lang}` : '';
    const urlWithoutLanguage = `${this.baseUrl}${endpointUrl}`;

    if (endpointUrl) {
      return `${urlWithoutLanguage}${languageParam}`;
    } else {
      throw new Error(`Invalid endpoint: ${endpoint}`);
    }
  }

  private get(
    endpoint: string,
    language?: string,
    responseType?: 'json' | 'blob' | 'arraybuffer',
    headers?: HttpHeaders
  ): Observable<any> {
    const url = this.createUrl(endpoint, language);
    let options: any = {};

    if (responseType) {
      options.responseType = responseType;
    }

    if (headers) {
      options.headers = headers;
    }

    return this.http.get(url, options);
  }

  private post(endpoint: string, data: any): Observable<any> {
    const url = this.createUrl(endpoint);
    return this.http.post(url, data);
  }

  getAllExperiences(language?: string): Observable<WorkExperience[]> {
    return this.get('experiences', language);
  }

  getProjects(language?: string): Observable<Project[]> {
    return this.get('projects', language);
  }

  getAbout(language?: string): Observable<Card[]> {
    return this.get('about', language);
  }

  getSkills(language?: string): Observable<Skills[]> {
    return this.get('skills', language);
  }

  getNav(language?: string): Observable<any> {
    return this.get('navigation', language);
  }

  getWelcome(language?: string): Observable<WelcomeData[]> {
    return this.get('welcome', language);
  }

  postContact(data: ContactFormData): Observable<any> {
    return this.post('contact', data);
  }

  postPassword(data: Password): Observable<ResumeResponse> {
    return this.post('resume', data);
  }

  openResumeWithToken(token: string): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.get('resume', undefined, 'arraybuffer', headers).pipe(
      catchError((error) => {
        console.error('Error fetching resume:', error);
        throw error;
      }),
      tap((resumeData: ArrayBuffer) => {
        const blob = new Blob([resumeData], {
          type: 'application/pdf',
        });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        window.URL.revokeObjectURL(url); // Nur einmal erreichbar telefonze ar mushaobs
      }),
      map(() => {})
    );
  }
}

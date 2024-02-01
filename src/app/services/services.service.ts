import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  WorkExperience,
  Project,
  Card,
  Skills,
  ContactFormData,
  WelcomeData,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private baseUrl = 'https://portfolio-api-production-6224.up.railway.app';
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

  private language: any = localStorage.getItem('selectedLanguage') || 'en';

  constructor(private http: HttpClient) {}

  private createUrl(endpoint: string, language?: string): string {
    const endpointUrl = this.endpoints[endpoint];
    const lang = language || this.language;
    const languageParam = `?language=${lang}`;
    if (endpointUrl) {
      return `${this.baseUrl}${endpointUrl}${languageParam}`;
    } else {
      throw new Error(`Invalid endpoint: ${endpoint}`);
    }
  }

  get(
    endpoint: string,
    language?: string,
    responseType?: 'json' | 'blob'
  ): Observable<any> {
    const url = this.createUrl(endpoint, language);
    let options: any = {};

    if (responseType) {
      options.responseType = responseType;
    }

    return this.http.get(url, options);
  }

  post(endpoint: string, data: ContactFormData): Observable<any> {
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

  postContact(data: any): Observable<any> {
    return this.post('contact', data);
  }

  getResume(): Observable<Blob> {
    return this.get('resume', undefined, 'blob');
  }
}

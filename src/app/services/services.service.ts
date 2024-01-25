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
    experiences: '/experiences',
    projects: '/projects',
    about: '/about',
    skills: '/skills',
    contact: '/contact',
    navigation: '/navigation',
    welcome: '/welcome',
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
      throw new Error(`Ungültiger Endpunkt: ${endpoint}`);
    }
  }

  get(endpoint: string, language?: string): Observable<any> {
    const url = this.createUrl(endpoint, language);
    return this.http.get(url);
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

  getWelcome(language?: string): Observable<WelcomeData> {
    return this.get('welcome', language);
  }

  post(endpoint: string, data: ContactFormData): Observable<any> {
    const url = this.createUrl(endpoint);
    return this.http.post(url, data);
  }

  postContact(data: any, language?: string): Observable<any> {
    return this.post('contact', data);
  }
}

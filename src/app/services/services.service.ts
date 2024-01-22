import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkExperience, Project } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private baseUrl = 'http://localhost:3000';
  private endpoints: any = {
    experiences: '/experiences',
    projects: '/projects',
  };

  constructor(private http: HttpClient) {}

  private createUrl(endpoint: string): string {
    const endpointUrl = this.endpoints[endpoint];
    if (endpointUrl) {
      return `${this.baseUrl}${endpointUrl}`;
    } else {
      throw new Error(`Ungültiger Endpunkt: ${endpoint}`);
    }
  }

  get(endpoint: string): Observable<any> {
    const url = this.createUrl(endpoint);
    return this.http.get(url);
  }

  getAllExperiences(): Observable<WorkExperience[]> {
    return this.get('experiences');
  }

  getProjects(): Observable<Project[]> {
    return this.get('projects');
  }
}

// loading.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor() {}

  setLoadingWithDelay(isLoading: boolean) {
    if (isLoading) {
      this.loadingSubject.next(isLoading);
    } else {
      timer(1500).subscribe(() => {
        this.loadingSubject.next(isLoading);
      });
    }
  }
}

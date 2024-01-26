import { Injectable } from '@angular/core';
import { translations } from '../language/translations';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

  constructor() {}

  getTranslation(key: string): string {
    if (
      translations[this.currentLanguage] &&
      translations[this.currentLanguage][key]
    ) {
      return translations[this.currentLanguage][key];
    } else {
      return translations['en'][key];
    }
  }
}

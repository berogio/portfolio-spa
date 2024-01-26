export interface Translation {
  [key: string]: string;
}

export const translations: { [key: string]: Translation } = {
  de: {
    resume: 'Lebenslauf',
    send: 'Senden',
    cancel: 'Abbrechen',
  },
  en: {
    resume: 'Resume',
    send: 'Send',
    cancel: 'Cancel',
  },
  ge: {
    resume: 'რეზიუმე',
    send: 'გაგზავნა',
    cancel: 'გაუქმება',
  },
};

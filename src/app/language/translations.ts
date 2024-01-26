export interface Translation {
  [key: string]: string;
}

export const translations: { [key: string]: Translation } = {
  en: {
    resume: 'Resume',
    send: 'Send',
    cancel: 'Cancel',
    contact: 'Contact',
    emailRequired: 'Email is required',
    emailInvalid: 'Invalid email format',
    messageRequired: 'Message is required',
    messageMinLength: 'Message must be at least 10 characters long',
    myExperience: 'My Experience',
  },
  de: {
    resume: 'Lebenslauf',
    send: 'Senden',
    cancel: 'Abbrechen',
    contact: 'Kontakt',
    emailRequired: 'E-Mail ist erforderlich',
    emailInvalid: 'Ungültiges E-Mail-Format',
    messageRequired: 'Nachricht ist erforderlich',
    messageMinLength: 'Nachricht muss mindestens 10 Zeichen lang sein',
    myExperience: 'Meine Erfahrung',
  },
  ge: {
    resume: 'რეზიუმე',
    send: 'გაგზავნა',
    cancel: 'გაუქმება',
    contact: 'კონტაქტი',
    emailRequired: 'ელ. ფოსტა აუცილებელია',
    emailInvalid: 'არასწორი ელ. ფოსტის ფორმატი',
    messageRequired: 'მესიჯი აუცილებელია',
    messageMinLength: 'მესიჯი უნდა იყოს მინიმუმ 10 სიმბოლო',
    myExperience: 'ჩემი გამოცდილება',
  },
};

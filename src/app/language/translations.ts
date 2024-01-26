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
    messageSent: 'Message sent!, OK!',
    requiredFields: 'Please fill out all required fields correctly.',
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
    messageSent: 'Nachricht gesendet!, OK!',
    requiredFields: 'Bitte füllen Sie alle erforderlichen Felder korrekt aus.',
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
    messageSent: 'მესიჯი გაიგზავნა! OK!',
    requiredFields: 'გთხოვთ, შეავსეთ ყველა საჭირო ველი სწორად.',
  },
};

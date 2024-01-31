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
    myExperience: 'Experience',
    messageSent: 'Message sent!, OK!',
    requiredFields: 'Please fill out all required fields correctly.',
    myCompetency: 'Competency',
    myProjects: 'My Projects',
    myEducation: 'Education',
    confirmCode: 'Confirmation code',
    codeReceived:
      'To download the resume, you need the confirmation code received in your email.',
  },
  de: {
    resume: 'Lebenslauf',
    send: 'Senden',
    cancel: 'Abbrechen',
    contact: 'Kontakt',
    emailRequired: 'E-Mail ist erforderlich',
    emailInvalid: 'Ungültiges E-Mail-Format',
    messageRequired: 'Nachricht ist erforderlich',
    messageMinLength: 'Nachricht muss mindestens 10 Zeichen',
    myExperience: 'Erfahrung',
    messageSent: 'Nachricht gesendet!, OK!',
    requiredFields: 'Bitte füllen Sie alle erforderlichen Felder.',
    myCompetency: 'Kompetenz',
    myProjects: 'Meine Projekte',
    myEducation: 'Ausbildung',
    confirmCode: 'Bestätigungscode',
    codeReceived:
      'Um den Lebenslauf herunterzuladen, benötigen Sie den in der E-Mail erhaltenen Bestätigungscode',
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
    myExperience: 'გამოცდილება',
    messageSent: 'მესიჯი გაიგზავნა! OK!',
    requiredFields: 'გთხოვთ, შეავსეთ ყველა საჭირო ველი სწორად.',
    myCompetency: 'უნარები',
    myProjects: 'ჩემი პროექტები',
    myEducation: 'განათლება',
    confirmCode: 'დადასტურება',
    codeReceived:
      'რეზიუმეს ჩამოსატვირთად დაგჭირდებათ მეილში მიღებული დამადასტურებელი კოდი',
  },
};

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactFormService {
  // No backend is configured. Submission is intentionally not delivered.
  // To connect a provider, replace this method's body with an HTTP POST
  // to your form endpoint (Formspree, Netlify Forms, etc.) without
  // changing the component.
  constructor(private http: HttpClient) {}

  submit(payload: ContactSubmission): Observable<{ ok: boolean; message: string }> {
    // Honest behaviour: no delivery configured.
    return of({
      ok: false,
      message:
        'Online submission is not yet configured. Please contact us by email or WhatsApp using the details on this page.',
    });
  }
}

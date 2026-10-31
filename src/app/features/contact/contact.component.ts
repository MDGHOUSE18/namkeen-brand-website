import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { ContactFormService } from '../../core/services/contact-form.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private formService = inject(ContactFormService);
  contact = inject(ContentService).getContact();
  submitting = false;
  status: { ok: boolean; message: string } | null = null;

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    enquiryType: ['General Enquiry', Validators.required],
    message: ['', Validators.required],
  });

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.formService
      .submit(
        this.form.value as {
          fullName: string;
          email: string;
          phone?: string;
          enquiryType: string;
          message: string;
        }
      )
      .subscribe((res: { ok: boolean; message: string }) => {
        this.status = res;
        this.submitting = false;
      });
  }

  get wa(): string {
    const n = this.contact.whatsappNumber?.replace(/\D/g, '');
    return n ? `https://wa.me/${n}` : '';
  }
}

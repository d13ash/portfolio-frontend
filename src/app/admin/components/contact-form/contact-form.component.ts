import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isEditMode = false;
  private contactId: string | null = null;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      sitename: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId) {
      this.isEditMode = true;
      this.contactService.getContactById(this.contactId).subscribe(contact => {
        this.contactForm.patchValue(contact);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const contactData = this.contactForm.value;

      if (this.isEditMode && this.contactId) {
        this.contactService.updateContact(this.contactId, contactData).subscribe({
          next: () => {
            this.router.navigate(['/admin/contacts']);
          },
          error: (error) => {
            console.error('Error updating contact:', error);
            this.isSubmitting = false;
          }
        });
      } else {
        this.contactService.addContact(contactData).subscribe({
          next: () => {
            this.router.navigate(['/admin/contacts']);
          },
          error: (error) => {
            console.error('Error creating contact:', error);
            this.isSubmitting = false;
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/contacts']);
  }
}

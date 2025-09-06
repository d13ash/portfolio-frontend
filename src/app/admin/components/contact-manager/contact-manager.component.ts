import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.scss'
})
export class ContactManagerComponent implements OnInit {
  contacts: Contact[] = [];
  isLoading = true;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.isLoading = true;
    this.contactService.getContact().subscribe(data => {
      this.contacts = data;
      this.isLoading = false;
    });
  }

  deleteContact(id: string): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id).subscribe(() => {
        this.contacts = this.contacts.filter(c => c._id !== id);
      });
    }
  }
}

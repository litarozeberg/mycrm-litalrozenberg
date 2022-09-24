import { Component, OnInit } from '@angular/core';
import { first, last } from 'rxjs';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts-service.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css'],
})
export class ShowContactsComponent implements OnInit {
  contact: Contact[] = [];


  prodName: string =""
  prodEmail:string=""
  constructor(private ctsservice: ContactsService) {}

  ngOnInit(): void {
    this.contact = this.ctsservice.getContacts();
    ('');
  }
}

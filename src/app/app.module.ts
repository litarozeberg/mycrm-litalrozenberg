import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/side-bar/side-bar.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { ShowContactsComponent } from './components/show-contacts/show-contacts.component';
import { FilterContactPipe } from './pipes/filter-contact.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCustomerComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    EditCustomerComponent,
    ContactsComponent,
    ViewCustomerComponent,
    FilterPipe,
    PageNotFoundComponent,
    ShowCustomersComponent,
    ShowContactsComponent,
    FilterContactPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

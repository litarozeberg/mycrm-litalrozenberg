import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = { firstname: '', lastname: '', phone: '', email: ''};

  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addCustomer() {
    this.cs
      .addCustomer(this.customer)
      .then(() => {
          alert('Customer was added successfully!');
        this.activeModal.close();
        this.router.navigateByUrl('/show-customers');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancel() : void {
    this.activeModal.close();
    this.router.navigateByUrl('/show-customers');
  } 
}
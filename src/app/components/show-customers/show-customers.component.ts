import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers-service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css'],
})
export class ShowCustomersComponent implements OnInit {
  customers: Customer[] = [];

  custFirstname: string = '';
  custLastname: string = '';
  custPhone: string = '';

  constructor(private cs: CustomersService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.cs.getCustomers().subscribe((customersData: Customer[]) => {
      this.customers = customersData;
    });
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure?')) {
      this.cs
        .deleteCustomer(customer)
        .then(() => console.log('Customer deleted successfully'))
        .catch((error) => {
          console.log(error);
        });
    }
  }

  addCustomer(): void {
    this.modal.open(AddCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  updateCustomer(customer: Customer): void {
    const modalRef = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

  getCustomer(customer: Customer): void {
    const modalRef = this.modal.open(ViewCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }
}

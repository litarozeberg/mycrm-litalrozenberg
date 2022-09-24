import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = { firstname: '', lastname: '', phone: '', email: '' };

  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.cs.getCustomerByid(this.id).subscribe((customerData: Customer) => {
        this.customer = customerData;
      });
    }
  }

  updateCustomer(): void {
    this.cs
      .updateCustomer(this.customer)
      .then(() => {
        alert('Customer updated successfully');
           this.activeModal.close();
           this.router.navigateByUrl('/show-customers');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  closeModal(): void {
    this.activeModal.close();
    this.router.navigateByUrl('/show-customers');
  }

  cancel(): void {
    this.activeModal.close();
    this.router.navigateByUrl('/show-customers');
  }
}

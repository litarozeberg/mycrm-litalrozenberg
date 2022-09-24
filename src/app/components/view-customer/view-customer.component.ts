import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers-service';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
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
        console.log(this.customer);
      });
    }
  }

  closeModal(): void {
    this.activeModal.close();
    this.router.navigateByUrl('/show-customers');
  }
}

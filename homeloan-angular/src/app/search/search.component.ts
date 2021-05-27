/**
 * @author Tarishi Geetey
 * @description Serach Component for AdminDashbord
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from '../models/customer.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  customer : CustomerModel;
  found : boolean;
   constructor(private service : AdminService, private route : Router) {
    }
 

  ngOnInit(): void {
    if(localStorage.getItem("admin") == null)
    this.route.navigate(['login']);
  }

  getCustomerById(cust_id : number) {
    this.service.customerById(cust_id).then((result: CustomerModel) => {
      this.customer = result;
      this.found = true;
    });
  }

  updateLoanStatus(cust_id: number){
    this.service.updateStatus(cust_id);
  }

}

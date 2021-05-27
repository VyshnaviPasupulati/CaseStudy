/**
 * @author Tarishi G.
 * @description Personal Details Form
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : CustomerModel;
  cust_genders : string[];
  states:string[];
  constructor(private service : CustomerService, private route : Router) {
    this.customer = new CustomerModel();
    this.cust_genders = ["Male", "Female", "Rainbow", "Prefer not to tell"];
    this.states=["Andhra Pradesh","Telengana","Karnataka","Maharashtra","Kerala","Tamil Nadu","Rajasthan","Delhi"];
   }

  ngOnInit(): void {
  }

  saveCustomer(){
    let customer : CustomerModel;
    this.service.createCustomer(this.customer).then((result : CustomerModel)=>{
      customer = result;
      localStorage.setItem('customer', JSON.stringify(customer));
      console.log(JSON.stringify(customer));
    });

    alert("Personal Details saved!!")
    this.route.navigate(['capital']);
  }
}

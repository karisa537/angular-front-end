import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  myform= new FormGroup({
    firstname: new FormControl(''),
    surname: new FormControl(''),
    middlename: new FormControl(''),
    postal_code: new FormControl(''),
    identification_document: new FormControl(''),
    idnopassportno: new FormControl(),
    address: new FormControl(''),
    email: new FormControl(''),
    phone_no: new FormControl(),
    gender: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),

  });

  
  constructor(public fb: FormBuilder, private apiservice:ApiServiceService, httd:HttpClient) {

    /* this.myform = this.fb.group({
      firstname: [''],
      middlename: [''],
      surnaname: [''],
      document_type: [''],
      id_pass_no: [''],
      address: [''],
      email: [''],
      phone_no: [null],
    }); */
   }

  ngOnInit(): void {}


  user: any;
  submitForm() {
      this.user = this.myform.value;
      this.apiservice.submitForm(this.user).subscribe((response: any) => {
        console.log(response);
      });
  }

  /* submitForm() {
  var formData: any = new FormData();
  formData.append("firstname", this.myform.value.firstname);
  this.apiservice
    .post('http://localhost:8082/ken20970_customers', formData)
    .subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });

  } */

}

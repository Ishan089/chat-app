import { Component, OnInit,ViewContainerRef } from '@angular/core';

import { AppService } from './../../app.service';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

 

@Component({

selector: 'app-signup',

templateUrl: './signup.component.html',

styleUrls: ['./signup.component.css']

})

export class SignupComponent implements OnInit {

 

public firstName: any;

public lastName: any;

public mobile: any;

public email: any;

public password: any;

public apiKey: any;

 

constructor(

public appService: AppService,

public router: Router,

private toastr: ToastrService,
vcr: ViewContainerRef) {

 



}

 

ngOnInit() {

}

 

public goToSignIn: any = () =>{

 

this.router.navigate(['/']);

}

 

public signupFunction: any =() =>{

 

if(!this.firstName){

this.toastr.warning('enter first name')

}

 

else if(!this.lastName)

{

this.toastr.warning('enter last name')

}

else if(!this.mobile){

this.toastr.warning('enter mobile')

}

else if(!this.email){

this.toastr.warning("enter email")

}

else if(!this.password){

this.toastr.warning("enter password")

}

else if(!this.apiKey){

this.toastr.warning('enter your api key')

}

else {

let data={

firstName: this.firstName,

lastName:this.firstName,

mobile:this.mobile,

email:this.email,

password:this.password,

apiKey:this.apiKey

}

 

console.log(data);

 

this.appService.signinFunction(data).subscribe((apiResponse) =>{

 

console.log(apiResponse);

 

if(apiResponse.status ===200) {

this.toastr.success("signup successful");

 

setTimeout(() => {

this.goToSignIn();

},2000);

 

}

 

else {

this.toastr.error(apiResponse.message);

}

}, (err) =>{

this.toastr.error('some error occured');

});

}

}

 

}
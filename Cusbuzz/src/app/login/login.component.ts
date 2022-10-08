import { Component, OnInit } from '@angular/core';
//import {FormControl,FormGroup,Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   error_message:boolean = false

  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  userLogin(item:any){

    if (item.name == "Suhas" && item.password == "12345") {
      this.error_message = false
      this.router.navigate(["/home"])

    }else{
      this.error_message = true
      setTimeout(() => {
        this.error_message = false
      },3000);
    }
  }

}



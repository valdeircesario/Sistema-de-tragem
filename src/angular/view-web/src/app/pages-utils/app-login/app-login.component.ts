import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {LoginService} from "./service/login.service";



@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit{


  public formLogin! : FormGroup;

        constructor(
          private formBuilder : FormBuilder,
          private loginService : LoginService,
        ) {

        }



  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }


  onSubmit(loginForm : NgForm) {
          // if(loginForm.valid){
          //   console.log(loginForm);
            this.loginService.efetuarLogin(loginForm.value)
          // }else {
          //   console.log("DEU RUIM")
          // }

  }

}

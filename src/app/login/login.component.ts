import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form=new FormGroup(
   {
    "username":new FormControl(),
    "password":new FormControl()
   }

  )

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handleFormSubmit(){
    let data=this.form.value
    // fetch
    console.log(data);
    // let val=12;
    // if(val!=13){
    //   return
    // }
    this.router.navigateByUrl("products")

    
    

  }
  

}


import { Component, OnInit } from '@angular/core';
import { GlobalserviceService} from '../Services/globalservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNotFound:boolean = false;
  username:string;
  password:string;
  constructor(private loginservice:GlobalserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log("inside");
    this.loginservice.verifyuserdetails(this.username,this.password).subscribe((response:any)=>{
      if(response==true){
        console.log("if");
        sessionStorage.setItem('username',this.username);
        this.router.navigate(['dashborad']);
      }else{
        console.log("else");
        sessionStorage.clear();
        this.userNotFound=true;
      }
    });
  }

}

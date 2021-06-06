import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  canActivate():boolean{
    if(sessionStorage.getItem('username')!=null){
      return true;
    }
    return false;
  }
}


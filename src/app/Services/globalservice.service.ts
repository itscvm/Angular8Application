import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http:HttpClient) { }

  verifyuserdetails(username,password){
    let url=environment.url+'Login?username='+username+'&password='+password;
    console.log(url);
    return this.http.get(url);
    // let dataobj;
    // dataobj.username=username;
    // dataobj.password=password;
    // return this.http.post(url,(dataobj));
  }
}

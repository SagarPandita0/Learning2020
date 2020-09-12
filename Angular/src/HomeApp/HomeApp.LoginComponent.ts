import { Component } from '@angular/core';
import { mySecurity } from '../Security/Security.Token';
import {Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {DataModel} from './HomeApp.DataModel';
@Component({
  
  templateUrl: './HomeApp.Login.html'
  
})
export class LoginComponent {
  constructor(private router:Router,public mySecureObj:mySecurity,public httpobj:HttpClient,public dmObj:DataModel){

  }
  Login(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var observable = this.httpobj.post("https://localhost:5001/api/Security",JSON.stringify(this.dmObj.username),{headers,responseType:'text'});
observable.subscribe(res => this.Success(res),res=> this.Error(res));
  }
  Success(res){
//this.mySecureObj =res;
this.mySecureObj.token = res;
//alert(res);
this.router.navigate(['/Master']);
  }
  Error(res){
alert(res);
  }
 
   
  }

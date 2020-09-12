import { Component } from '@angular/core';
import {Patient} from './app.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HospitalClient';
  Patientobj:Patient = new Patient();
  Patientobjs:Array<Patient> = new Array<Patient>();
  constructor(public httpobj:HttpClient){

  }

  AddInMemory(){
    this.Patientobjs.push(this.Patientobj); // adding in the collection
    this.Patientobj = new Patient(); //clearing the fields.
  }
  Add(){
    //send to webapi!
var observable = this.httpobj.post("https://localhost:44334/api/PatientApi",this.Patientobjs);
observable.subscribe(res => this.Success(res),res=> this.Error(res));
  }
  Success(res){
this.Patientobjs =res;
console.log(res);
  }
  Error(res){

  }
 
}
 
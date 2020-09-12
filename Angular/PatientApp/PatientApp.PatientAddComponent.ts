import { Component } from '@angular/core';
import {Patient} from './PatientApp.PatientAddModel';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './PatientApp.PatientAdd.html',
  styleUrls: ['./PatientApp.PatientAdd.css']
})
export class PatientAppComponent {
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
var observable = this.httpobj.post("https://localhost:5001/api/PatientApi",this.Patientobjs);
observable.subscribe(res => this.Success(res),res=> this.Error(res));
  }
  Success(res){
this.Patientobjs =res;
  }
  Error(res){

  }
 
}
 
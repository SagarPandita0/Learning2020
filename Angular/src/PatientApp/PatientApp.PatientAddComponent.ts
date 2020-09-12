import { Component, OnInit } from '@angular/core';
import {Patient} from './PatientApp.PatientAddModel';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './PatientApp.PatientAdd.html',
  styleUrls: ['./PatientApp.PatientAdd.css']
})
export class PatientAppComponent implements OnInit{
  loginForm: FormGroup;
  
  ngOnInit(): void {
    this.initForm();
  }
  
  title = 'HospitalClient';
  Patientobj:Patient = new Patient();
  Patientobjs:Array<Patient> = new Array<Patient>();
  constructor(public httpobj:HttpClient,private fb: FormBuilder){
  }
  initForm(): void {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required,
      Validators.pattern('^[0-9]{10}$')]],
      name: ['', Validators.required],
      address: ['', Validators.required]
})};
isValidInput(fieldName): boolean {
  return this.loginForm.controls[fieldName].invalid &&
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
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
 
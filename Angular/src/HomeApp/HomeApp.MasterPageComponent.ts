import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { mySecurity } from 'src/Security/Security.Token';
import {DataModel} from './HomeApp.DataModel';
@Component({
 

  templateUrl: './HomeApp.Master.html'
  
})
export class MasterPageComponent {
  constructor(private router: Router,public mySecureObj:mySecurity,public dmObj:DataModel) {}
public goPlaces() {
    this.router.navigate(['/Patient/Add']);
  }
  public goPlace() {
    this.router.navigate(['/Home']);
  }
}
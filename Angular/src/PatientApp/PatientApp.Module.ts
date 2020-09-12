import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { PatientAppComponent } from './PatientApp.PatientAddComponent';
import {PatientRoutes} from './PatientApp.Routing';
import {CommonModule} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from '../Security/Security.Interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientAppComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule.forChild(PatientRoutes)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true}],
  bootstrap: [PatientAppComponent]
})
export class PatientModule { 
  
}

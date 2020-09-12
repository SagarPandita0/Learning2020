import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HomeComponent} from './HomeApp.HomeComponent';
import {MasterPageComponent} from './HomeApp.MasterPageComponent';
import {HomeRoutes} from './HomeApp.Routing'
import {mySecurity} from '../Security/Security.Token';
import {IndexComponent} from './HomeApp.IndexComponent';
import { LoginComponent } from './HomeApp.LoginComponent';
import { myAuthGuard } from 'src/Security/Security.AuthGuard';
import {DataModel} from './HomeApp.DataModel';
import {JwtInterceptor} from '../Security/Security.Interceptor';
@NgModule({
  declarations: [
   HomeComponent,MasterPageComponent,LoginComponent,IndexComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(HomeRoutes)
  ],
  providers: [mySecurity,myAuthGuard,DataModel,{provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [IndexComponent]
})
export class HomeModule { }

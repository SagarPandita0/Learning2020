import {HomeComponent} from './HomeApp.HomeComponent'
import{LoginComponent} from './HomeApp.LoginComponent'
import { MasterPageComponent } from './HomeApp.MasterPageComponent'
import {myAuthGuard} from '../Security/Security.AuthGuard'
export const HomeRoutes=[
    {path: 'Login', component:LoginComponent},
    {path: '', component:MasterPageComponent, canActivate :[myAuthGuard]},
    {path: 'Home',component:HomeComponent,canActivate :[myAuthGuard]},
    {path: 'Master', component:MasterPageComponent,canActivate :[myAuthGuard]},
    {path: 'Patient',loadChildren:()=> import('../PatientApp/PatientApp.Module').then(m=>m.PatientModule),canActivate :[myAuthGuard]},
]

  
  
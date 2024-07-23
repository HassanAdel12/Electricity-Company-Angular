import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CuttingListComponent } from './cutting-list/cutting-list.component';
import { AddCuttingComponent } from './add-cutting/add-cutting.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:"",redirectTo:"Login",pathMatch:"full"},
    {path:"Login",component:LoginComponent},
    {path:"CuttingList",component:CuttingListComponent},
    {path:"AddCutting",component:AddCuttingComponent},
    {path:"**",component:ErrorComponent}
];

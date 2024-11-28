import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { StudentDisplayComponent } from './Component/student-display/student-display.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CallApiDetailComponent } from './GETAPI/call-api-detail/call-api-detail.component';
import { PostApiComponent } from './GETAPI/call-api-detail/post-api/post-api.component';
export const routes: Routes = 
[
        {
            path:"add-employee",
            component:AddEmployeeComponent
        },
        {
            path:"student-display",
            component:StudentDisplayComponent
        },
        {
            path:"Forms",
            component:FormsComponent
        },
        {
            path:"Reactive",
            component:ReactiveFormComponent
        },
        {
            path:"GetAPI",
            component:CallApiDetailComponent
        },
        {
            path:"POSTAPI",
            component:PostApiComponent
        }

 
];

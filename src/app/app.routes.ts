import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { StudentDisplayComponent } from './Component/student-display/student-display.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CallApiDetailComponent } from './GETAPI/call-api-detail/call-api-detail.component';
import { PostApiComponent } from './GETAPI/call-api-detail/post-api/post-api.component';
import { UsingServiceCategoryComponent } from './using-service-category/using-service-category.component';
import { LifeCycleComponent } from './ComponentLifeCycle/life-cycle/life-cycle.component';
import { NgTemplateComponent } from './Component/ngTemplate/ng-template/ng-template.component';
import { NgContainerComponent } from './Component/ngContainer/ng-container/ng-container.component';
import { LoginComponent } from './Component/login/login.component';
export const routes: Routes = 
[
        {
            path:"login",
            component:LoginComponent
        },
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
        },
        {
            path:"SERVICEPOSTAPI",
            component:UsingServiceCategoryComponent
        },
        {
            path:"LifeCycle",
            component:LifeCycleComponent
        },
        {
            path:"NgTemplate",
            component:NgTemplateComponent
        },
        {
            path:"NgContainer",
            component:NgContainerComponent
        }  
];

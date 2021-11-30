import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DashComponent } from './dash/dash.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { PeriodeManagementComponent } from './periode-management/periode-management.component';
import { PeriodeAddComponent } from './periode-add/periode-add.component';
import { ExerciceManagementComponent } from './exercice-management/exercice-management.component';
import { ExerciceAddComponent } from './exercice-add/exercice-add.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { PlanComptableAddComponent } from './plan-comptable-add/plan-comptable-add.component';
import { CompteComptableAddComponent } from './compte-comptable-add/compte-comptable-add.component';
import { CompteManagementComponent } from './compte-management/compte-management.component';
import { EcritureAddComponent } from './ecriture-add/ecriture-add.component';
import { OperationAddComponent } from './operation-add/operation-add.component';
import { OperationsListComponent } from './operations-list/operations-list.component';





@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    EmployeesManagemenetComponent,
    EmployeeAddComponent, 
    DashComponent, 
    EmployeeEditComponent, 
    PeriodeManagementComponent, 
    PeriodeAddComponent, 
    ExerciceManagementComponent, 
    ExerciceAddComponent, 
    CompanyAddComponent, 
    CompanyDetailsComponent, 
    PlanComptableAddComponent, 
    CompteComptableAddComponent, CompteManagementComponent, EcritureAddComponent, OperationAddComponent, OperationsListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }

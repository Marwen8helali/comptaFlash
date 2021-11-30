import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

import { DashComponent } from './dash/dash.component';

import { DashboardComponent } from './dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { ExerciceAddComponent } from './exercice-add/exercice-add.component';
import { ExerciceManagementComponent } from './exercice-management/exercice-management.component';
import { HomeComponent } from './home/home.component';
import { PeriodeAddComponent } from './periode-add/periode-add.component';
import { PeriodeManagementComponent } from './periode-management/periode-management.component';
import { PlanComptableAddComponent } from './plan-comptable-add/plan-comptable-add.component';
import { CompteComptableAddComponent } from './compte-comptable-add/compte-comptable-add.component';
import { CompteManagementComponent } from './compte-management/compte-management.component';
import { EcritureAddComponent } from './ecriture-add/ecriture-add.component';
import { OperationAddComponent } from './operation-add/operation-add.component';
import { OperationsListComponent } from './operations-list/operations-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },

    { path:'admin-employees', component:EmployeesManagemenetComponent },
    { path:'admin-employees-add', component:EmployeeAddComponent },
    { path:'admin-employees-edit/:id', component:EmployeeEditComponent },

    
    { path:'admin-config-periode', component:PeriodeManagementComponent  },
    { path:'admin-config-periode-add', component:PeriodeAddComponent  },


    { path:'admin-exercies', component:ExerciceManagementComponent  },
    { path:'admin-exercice-add', component:ExerciceAddComponent  },
    
    { path:'admin-company-add/:idExercice', component:CompanyAddComponent  },
    { path:'admin-company-details/:id', component:CompanyDetailsComponent  },
    { path:'admin-company/:id/add-plan-comptable', component:PlanComptableAddComponent  },

    { path:'admin-company/:id/:id/add-compte-comptable', component:CompteComptableAddComponent  },
    { path:'admin-company/:id/:id/compte-details', component:CompteManagementComponent  },
    { path:'admin-company/compte-details/:id', component:EcritureAddComponent  },
    

    { path:'admin-company/compte-details/add-operation/ecritrue/:id', component:OperationAddComponent  },
    
    { path:'admin-company/compte-details/list-operation/ecritrue/:id', component:OperationsListComponent  },
    

    

    
    
    

    
    

  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

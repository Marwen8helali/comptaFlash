import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addNewVehicule(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/vehicules/add',data,
      
      httpOptions

    )
  }

  
  addNewMachine(name){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/machines/add',{name:name},
      
      httpOptions

    )
  }


  getAllPeriodes(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/periode/list',
      
      httpOptions

    )
  }

  getAllExercices(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/exercice/list',
      
      httpOptions

    )
  }

  findCompteById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/compte-comptable/list/'+id,
      
      httpOptions

    )
  }

  addNewPeriode(actif,type){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/periode/add',{actif,type},
      
      httpOptions

    )
  }

  addNewExercice(data)
    {
      const token = localStorage.getItem("token");
      const tokenType = localStorage.getItem("tokenType");
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'authorization':tokenType+' '+token
        })
      };
      return this.http.post(environment.apiEndPoint + '/api/exercice/add',data,
        
        httpOptions
  
      )
  }

  addNewCompany(data)
    {
      const token = localStorage.getItem("token");
      const tokenType = localStorage.getItem("tokenType");
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'authorization':tokenType+' '+token
        })
      };
      return this.http.post(environment.apiEndPoint + '/api/company/add',data,
        
        httpOptions
  
      )
  }

  addNewEcriture(data)
  {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/ecriture/add',data,
      
      httpOptions

    )
}

  machinesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/list',
      
      httpOptions

    )
  }
 





 
  


  notificationsList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',
      
      httpOptions

    )
  }

  updateNotifications(){
        
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',
      
      httpOptions

    )
  }
  



  


  getEmployeesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/list',
      
      httpOptions

    )
  }



  deleteEmployee(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/delete/'+id,
      
      httpOptions

    )
  }


  deleteMachine(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/delete/'+id,
      
      httpOptions

    )
  }


  addNewIntervention( data ){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/interventions/add',data,
      
      httpOptions

    )
  }


  getMyInterventions(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/mylist',
      
      httpOptions

    )
  }

  getAllCompte(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/compte-comptable/list',
      
      httpOptions

    )
  }

  getAllclass(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/cpt/list',
      
      httpOptions

    )
  }

  

  getAllInterventionsList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/list',
      
      httpOptions

    )
  }



  getMoreData(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/data/list',
      
      httpOptions

    )
  }


  
  findCompanyById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/company/details/'+id,
      
      httpOptions

    )
  }

  findCompteComptableById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/compte-comptable/details/'+id,
      
      httpOptions

    )
  }

  findPlanComptableById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/plan-comptable/details/'+id,
      
      httpOptions

    )
  }

  addNewCompteComptable(data)
  {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/compte-comptable/add',data,
      
    httpOptions
    )
}

  


  addNewPlanComptable(data){

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/plan-comptable/add',data,
      
      httpOptions

    )
  }



  addEcritrue(data){

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/ecriture/add',data,
      
      httpOptions

    )
  }


  addOperation(data){

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/operations/add',data,
      httpOptions
    )
  }

  getOperationListByEcritureID(id){
    

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/ecriture/operation/list/'+id,
      
      httpOptions

    )
  }

  


}

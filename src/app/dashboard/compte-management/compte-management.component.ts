import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-compte-management',
  templateUrl: './compte-management.component.html',
  styleUrls: ['./compte-management.component.css']
})
export class CompteManagementComponent implements OnInit {

  id:any
  comptes:any
  company:any
  plans:any
  compte:any
  comp:any

  constructor(private api:ApiService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
//this.getData;
this.getListCompte();
console.log("data List compte",)


/*this.id = this.route.snapshot.params.id;
this.api.findCompteComptableById(this.id).toPromise().then((res)=>{
  console.log("comptes",res);
  this.comptes = res;
  
})*/
this.id = this.route.snapshot.params.id;

this.api.findCompanyById(this.id).toPromise().then((res)=>{
  console.log("detaill of companyID",res);
  this.company = res;
  
})
/*this.id = this.route.snapshot.params.id;
this.api.findPlanComptableById(this.id).toPromise().then((res)=>{
  console.log("plans",res);
  this.plans = res;
 
  
})*/




  
    }
   /* getData(){
      if (localStorage.getItem('role') != "ROLE_PM") {
        this.router.navigate(['/error-page'])
      }
  
      this.api.findCompteById(this.id).subscribe((data)=>{
        console.log("data of comptes",data[0]);
        
        this.comptes = data;
     
      })
      
    }*/
    getListCompte(){
      if (localStorage.getItem('role') != "ROLE_PM") {
        this.router.navigate(['/error-page'])
      }
  
      this.api.getAllCompte().subscribe((data)=>{
        console.log("comptes",data);
        
        this.compte = data;
      })
      
    }

}

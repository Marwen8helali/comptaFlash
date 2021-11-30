import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  display:any;
  id;
  

  company:any;

  plans:any

  compte:any;

  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
        // get role
        let role = localStorage.getItem('role');

        if (role == 'ROLE_PM') {
          this.display = true;
        }
    this.id = this.route.snapshot.params.id;

    this.api.findCompanyById(this.id).toPromise().then((res)=>{
      console.log("detaill of company",res);
      this.company = res;
      
    })
    /*this.compte = this.route.snapshot.params.id;

    this.api.findCompteComptableById(this.id).toPromise().then((res)=>{
      console.log("compte",res);
      this.compte = res;
      
    })*/


    this.plans = this.route.snapshot.params.id;

    this.api.findPlanComptableById(this.id).toPromise().then((res)=>{
      console.log("plans",res);
      this.plans = res;
      
    })


  

/*
    let data = [
      { id:1 , options: [
        { id: 5 , amount:50 , type: 0 },
        { id: 5 , amount:50 , type: 0 },
        { id: 5 , amount:50 , type: 0 },
          
      ] 
    
    }
    ]*/
  }



}

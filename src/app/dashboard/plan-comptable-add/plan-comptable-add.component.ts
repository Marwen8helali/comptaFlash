import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-plan-comptable-add',
  templateUrl: './plan-comptable-add.component.html',
  styleUrls: ['./plan-comptable-add.component.css']
})
export class PlanComptableAddComponent implements OnInit {


  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    keyCompte : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    
  })

  periodes = [];

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }


  }

  addData(){
    this.errMsg="";
    let data = this.dataForm.value;
    data.company = this.route.snapshot.params.id;


    this.api.addNewPlanComptable(data).subscribe((data:any)=>{
      console.log(data);
      if (data.id) {
        this.successMsg="plan ajoutée avec success.";
        this.dataForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      this.errMsg="Something went wrong, please try again.";
      
      
    })

    
  }



}

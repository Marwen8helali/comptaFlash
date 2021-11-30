import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { ActivatedRoute } from '@angular/router';
import { ExerciceManagementComponent } from '../exercice-management/exercice-management.component';


@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    country : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    socialRaison : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    tel : new FormControl('',Validators.required),
    activity : new FormControl('',Validators.required), 
    
  })
  currentId:any

  exercices;

  constructor(private api:ApiService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }

  
    this.currentId = this.api.getAllExercices().toPromise().then((res:any)=>this.exercices = res);
  console.log("current-id",this.currentId)
  this.route.paramMap.subscribe(params => {
    this.exercices = +params.get('idExercice');
    console.log('The id of this route is: ', this.exercices);
  });
}




  addData(){
    this.errMsg="";
    
    let data = this.dataForm.value;
    data.exerciceID = this.route.snapshot.params.idExercice;

    this.api.addNewCompany(data).subscribe((data:any): void=>{
      console.log(data);
      if (data.id) {
        this.successMsg="company ajoutée avec success.";
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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-exercice-add',
  templateUrl: './exercice-add.component.html',
  styleUrls: ['./exercice-add.component.css']
})
export class ExerciceAddComponent implements OnInit {


  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    year : new FormControl(true),
    periodeID : new FormControl('',Validators.required),
    
  })

  periodes = [];

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }

    this.api.getAllPeriodes().toPromise().then((res:any)=>this.periodes = res);
 
  }




  addData(){
    this.errMsg="";
    
    

    this.api.addNewExercice(this.dataForm.value).subscribe((data:any)=>{
      console.log(data);
      if (data.idExercice) {
        this.successMsg="exercice ajoutée avec success.";
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

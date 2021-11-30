import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-periode-add',
  templateUrl: './periode-add.component.html',
  styleUrls: ['./periode-add.component.css']
})
export class PeriodeAddComponent implements OnInit {


  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    actif : new FormControl(true),
    type : new FormControl('',Validators.required),
    
  })


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }
  }




  addData(){
    this.errMsg="";
    const actif = this.dataForm.value.actif;
    const type = this.dataForm.value.type;
    
    
    

    this.api.addNewPeriode(actif,type).subscribe((data:any)=>{
      console.log(data);
      if (data.id) {
        this.successMsg="periode ajoutée avec success.";
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

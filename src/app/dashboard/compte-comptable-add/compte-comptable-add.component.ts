import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-compte-comptable-add',
  templateUrl: './compte-comptable-add.component.html',
  styleUrls: ['./compte-comptable-add.component.css']
})




export class CompteComptableAddComponent implements OnInit {
  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    designation : new FormControl('',Validators.required), 
    apurement : new FormControl('',Validators.required), 
  })

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM" ) {
      this.router.navigate(['/error-page'])
    }
  }

  addData(){
    this.errMsg="";
    let data = this.dataForm.value;
    data.planID = this.route.snapshot.params.id;
    console.log("look this",data)


    this.api.addNewCompteComptable(data).subscribe((data:any)=>{
      console.log(data);
      if (data.id) {
        this.successMsg="compte ajoutée avec success.";
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








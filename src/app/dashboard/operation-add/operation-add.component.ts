import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-operation-add',
  templateUrl: './operation-add.component.html',
  styleUrls: ['./operation-add.component.css']
})
export class OperationAddComponent implements OnInit {

  //[formGroup]="operation"  (ngSubmit)="add()"


  errMsg='';
  successMsg='';


  operation = new FormGroup({

    entitled: new FormControl('',Validators.required),
    libilee : new FormControl('',Validators.required),
    numPiece : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    journal : new FormControl('',Validators.required),
    type : new FormControl('0',Validators.required),
    amount : new FormControl('',Validators.required),
    class:new FormControl('',Validators.required),
    ecriture: new FormControl(this.route.snapshot.params.id)
    
  })

  saisie = ["Achat","Vente","Caise","Banque","Opération Divers"];
  class:any

  constructor(private route:ActivatedRoute,private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  add(){

    console.log(this.operation.value);

    this.api.addOperation(this.operation.value).toPromise().then((res:any)=>{
      console.log(res); 

      if (res.id) {
        this.successMsg="Operation ajoutée avec success.";
      }
    })
    

  }

  getListclass(){
    if (localStorage.getItem('role') !="ROLE_PM" ) {
      this.router.navigate(['/error-page'])
    }

    this.api.getAllclass().subscribe((data)=>{
      console.log("class",data);
      
      this.class = data;
    })
    
  }


  
}

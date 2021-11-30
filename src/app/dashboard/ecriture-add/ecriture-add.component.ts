import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ecriture-add',
  templateUrl: './ecriture-add.component.html',
  styleUrls: ['./ecriture-add.component.css']
})
export class EcritureAddComponent implements OnInit {
  errMsg='';
  successMsg='';
  dataForm = new FormGroup({
    entitled: new FormControl('',Validators.required),
    libilee : new FormControl('',Validators.required),
    Num_piece : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    journal : new FormControl('',Validators.required),
    type : new FormControl('',Validators.required),
    amount : new FormControl('',Validators.required),
    
  })
id:any;
  saisie = ["Achat","Vente","Caise","Banque","Opération Divers"];
  compte:any
  class:any

  constructor(private api:ApiService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListCompte();
this.id = this.route.snapshot.params.id;
this.api.findCompteComptableById(this.id).toPromise().then((res)=>{
  console.log("comptes",res);
  this.compte = res;
  
})

this.getListclass()

    if (localStorage.getItem('role') != "ROLE_PM" ) {
      this.router.navigate(['/error-page'])
    }

  }
  
  addData(){
    this.errMsg="";
    
    

    this.api.addNewEcriture(this.dataForm.value).subscribe((data:any)=>{
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
  getListCompte(){
    if (localStorage.getItem('role') !="ROLE_PM" ) {
      this.router.navigate(['/error-page'])
    }

    this.api.getAllCompte().subscribe((data)=>{
      console.log("comptes",data);
      
      this.compte = data;
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

  /*********************************************** */


  acritureForm = new FormGroup({
    name: new FormControl('',Validators.required),
    compteComptable: new FormControl(this.route.snapshot.params.id,Validators.required),
    
  })



  addEcriture(){
    this.api.addEcritrue(this.acritureForm.value).toPromise().then((res:any)=>{
      console.log(res);
      if (res.id != null) {
        this.router.navigateByUrl('/dashboard/home/admin-company/compte-details/add-operation/ecritrue/'+res.id)
      
      }
    })
  }


}




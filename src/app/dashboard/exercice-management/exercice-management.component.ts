import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-exercice-management',
  templateUrl: './exercice-management.component.html',
  styleUrls: ['./exercice-management.component.css']
})
export class ExerciceManagementComponent implements OnInit {


  exercices:any = [];

  display = false;


  constructor(private api:ApiService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData() 

    // get role
    let role = localStorage.getItem('role');

    if (role == 'ROLE_PM') {
      this.display = true;
    }
   
  }

  getData(){
    /*if ((localStorage.getItem('role') != "ROLE_PM") || (localStorage.getItem('role') !="ROLE_USER") ) {
      this.router.navigate(['/error-page'])
    }*/
    if (localStorage.getItem('role') != "ROLE_PM"){
      this.router.navigate(['/error-page'])
    }
  
    

    this.api.getAllExercices().subscribe((data)=>{
      console.log("data of exercice",data[0]);
      
      this.exercices = data;
   
    })

  }
}

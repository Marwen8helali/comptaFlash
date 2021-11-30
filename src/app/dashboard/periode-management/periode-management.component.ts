import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-periode-management',
  templateUrl: './periode-management.component.html',
  styleUrls: ['./periode-management.component.css']
})
export class PeriodeManagementComponent implements OnInit {


  periodes:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getData() 
  }

  getData(){
    if (localStorage.getItem('role') != "ROLE_ADMIN" ) {
      this.router.navigate(['/error-page'])
    }

    this.api.getAllPeriodes().subscribe((data)=>{
      console.log(data);
      
      this.periodes = data;
    })

  }




}

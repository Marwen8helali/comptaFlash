import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css']
})
export class OperationsListComponent implements OnInit {

  operations = [];

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getOperationListByEcritureID(this.route.snapshot.params.id).toPromise().then((res:any)=>this.operations = res )
  }

  calculBalance(){
    let res= 0;

    this.operations.map((o:any)=>{
      if (o.type == 0) {
        res+=o.amount;
      }else{
        res-=o.amount;
      }
    })

    return res;
  }

}

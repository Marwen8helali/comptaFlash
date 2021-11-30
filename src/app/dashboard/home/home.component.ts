import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = []

  user:any;

  notifications:any = [];

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    

    this.auth.info().subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('role',data.roles[0].name);
      
      this.user = data;
      
      const role = (data.roles[0].name);

      console.log("user role", role);
      
      switch (role) {
        case "ROLE_ADMIN":
          this.menu = [
            
          {
            title: "Acceuil",
            counter: 0,
            link: '/dashboard/home/dash',
            subMenus: []
          },
          {
            title: "Employées",
            counter: 0,
            link: '/dashboard/home/admin-employees',
            subMenus: []
          },
          {
            title: "Configuration période",
            counter: 0,
            link: '/dashboard/home/admin-config-periode',
            subMenus: []
          },
          
          

          
          


          ]
          break;
  
        case "ROLE_PM":
          this.menu = [

            {
              title: "Acceuil",
              counter: 0,
              link: '/dashboard/home/dash',
              subMenus: []
            },
            {
              title: "Exercices",
              counter: 0,
              link: null,
              subMenus: [
                {
                  title: "List",
                  counter: 0,
                  link: '/dashboard/home/admin-exercies', 
                },
              ]
            },


            
           
  
            
  
          ]
  
          break;  
          case "ROLE_USER":
            this.menu = [
             
              {
                title: "Ecritures",
                counter: 0,
                link: '/dashboard/home/admin-exercies',
                subMenus: []
              },
    
            ]
    
            break; 



          
  
        default:
          break;
      }
      
    },()=>{
      localStorage.clear();

        this.router.navigate(['/signin'])
    })


    this.getNotification();
 


  }

  newNotifcationsCount = [];


  getNotification(){
    this.api.notificationsList().subscribe((data:any)=>{
      console.log(data);

      data.forEach(n => {
        if (n.seen == false) {
          this.newNotifcationsCount.push(n);
        }
      });
      
      this.notifications = data.reverse();
    })
  }

  updateNotifications(){
    this.api.updateNotifications().subscribe((data)=>{
      this.getNotification();
    });
  }




  logout(){
    /*this.auth.logout().subscribe((data:any)=>{
      console.log(data);
      if (data.success) {
        localStorage.clear();
        // router => signin

        this.router.navigate(['/signin'])

      }
      
    })*/

    localStorage.clear();
        // router => signin

        this.router.navigate(['/signin'])
  }

  
}

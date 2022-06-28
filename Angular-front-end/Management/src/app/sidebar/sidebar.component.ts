import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   admin: string
   user : string
  constructor(public userService: UserService) { }

  ngOnInit(): void {
   let roleName=this.userService.getAuthenticatedUerRole()
     if(roleName == "Admin")
     {
      this.admin=roleName
     }
     else
     {
      this.user=roleName
     }
  }

}

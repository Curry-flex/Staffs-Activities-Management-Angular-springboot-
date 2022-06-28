import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { UsersPayload } from './UsersPayload';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:8080/authenticate"
  private userUrl = "http://localhost:8080/api/realbus/stats/userCount"
  private userByIdUrl= "http://localhost:8080/api/realbus/user/"
  private rolesUrl ="http://localhost:8080/api/realbus/roles"
  private addUserUrl ="http://localhost:8080/api/realbus/registerNewUser"
  private deleteUserUrl ="http://localhost:8080/api/realbus/user/"
  requestHeaders= new HttpHeaders({"NO-AUTH": 'True'})
  constructor(private httpclient: HttpClient,private userAuthService: UserAuthService) { }


   login(userPayload:UsersPayload)
   {
    return this.httpclient.post(this.baseUrl,userPayload,{headers: this.requestHeaders})
   }

   isAuthenticated(): boolean
   {
     return localStorage.getItem("username") !=null;
   }

   getAuthenticatedUerRole()
   {
     let roleName:string;

     const userRoles:any = this.userAuthService.getRoles();
     for(let i=0; i < userRoles.length; i++)
     {
       roleName= userRoles[i].roleName;
       return roleName;
     }
   }

   public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  getUserCount()
  {
    return this.httpclient.get(this.userUrl)
  }

  getUserByID(id:number)
  {
         return this.httpclient.get(this.userByIdUrl + id)
  }

  getAssignedUsername(id:any)
  {
    return this.httpclient.post(this.userByIdUrl,id)
  }

  getRoles()
  {
         return this.httpclient.get(this.rolesUrl)
  }

   addNewUser(user:any)
   {
      return this.httpclient.post(this.addUserUrl,user)
   }

   deleteUser(id:number)
   {
     return this.httpclient.delete(this.deleteUserUrl + id)
   }
}

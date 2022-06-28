import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setToken(jwtToken:string)
  {
      localStorage.setItem("jwtToken",jwtToken)
  }
  public clear() {
    localStorage.clear()
  }

  public setRoles(roles:[])
  {
      localStorage.setItem("roles",JSON.stringify(roles))
  }

  public getRoles():[]
  {
    return JSON.parse(localStorage.getItem("roles"))
  }

  public getToken(): string{
    return localStorage.getItem("jwtToken")
  }

  public setUsername(username:string)
  {
    return localStorage.setItem('username',username)
  }

  public setUserID(userID:number)
  {
    return localStorage.setItem("userID",JSON.stringify(userID))
  }

  public getUserID()
  {
    return JSON.parse(localStorage.getItem("userID")) 
  }

  logout()
  {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("roles")
    localStorage.removeItem("username")
    localStorage.removeItem("userID")
  }

  
}

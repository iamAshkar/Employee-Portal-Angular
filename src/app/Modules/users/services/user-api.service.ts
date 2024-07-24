import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userModel } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  
  server_url = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }
  
  // Add user
  addUserAPI(user: userModel) {
    return this.http.post(`${this.server_url}/users`, user);
  }
  
  // Get user by ID
  getUserAPI() {
    return this.http.get(`${this.server_url}/users`);
  }
  
  deleteUserAPI(id: any) {
    return this.http.delete(`${this.server_url}/users/${id}`);
  }
  viewAUserAPI(id:any){
    return this.http.get(`${this.server_url}/users/${id}`)
  }
  editUserAPI(id:any,user:userModel){
    return this.http.put(`${this.server_url}/users/${id}`,user)
  }
}

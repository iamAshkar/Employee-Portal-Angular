import { Component } from '@angular/core';
import { userModel } from '../../user.model';
import { UserApiService } from '../services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user: userModel={};//to hold users data

constructor(private api:UserApiService,private router:Router) { }

addUser(){
  this.api.addUserAPI(this.user).subscribe({
    next:(res)=>{
      console.log(res)
      // navigator("/users")
      alert("user added successfully")
      this.router.navigate(['/users'])
    },
    error:(err)=>{
      console.log(err)
    }
  })

}
}

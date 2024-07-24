import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AdminApiService } from '../services/admin-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //string interpolation
  welcomemesaage: string = 'Login Here!';
  //property binding
  imageUrl: string =
    'https://imarticus.org/blog/wp-content/uploads/2020/09/gtr.gif';

  //variable delcrataion
  empEmail: string = '';
  empPswd: string = '';
  spinner: boolean = false;
  //dependency injection
  constructor(
    private router: Router,
    private ds: DataService,
    private api: AdminApiService
  ) {}
//login logic
  login() {
    if (this.empEmail && this.empPswd) {
      this.spinner = true

      // this.ds.dsemail = this.empEmail;
      //check if email and password are present in the server
      this.api.Authentication().subscribe({
        next:(res:any)=>{
          const { email,password ,name} =res
          console.log(res);
          // console.log(res[0].email , res[0].password);
          console.log(this.empEmail , this.empPswd);
          if(email == this.empEmail && password == this.empPswd){
            sessionStorage.setItem("admin",name)
            // alert('login success');
            setTimeout(() => {
              this.router.navigateByUrl('dashboard');

            }, 3000);            
          }
          else{
            this.spinner = false
            alert('login failed...enter valid email and password');
          }

          
          
        }
      })
    }
     
  }
  //evenet binding $event
  getEmail(event: any) {
    console.log(event.target.value);
  }
  getPassword(pswd: any, email: any) {
    console.log(pswd.value);
    alert(`${pswd.value} is your password & ${email.value} is your email`);
  }
}

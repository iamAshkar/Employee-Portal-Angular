import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api.service';
import { userModel } from '../../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: userModel = {};

  constructor(private route: ActivatedRoute, private api: UserApiService, private router:Router) {}

  ngOnInit(): void {
    // Find the particular userId by using the ActivatedRoute class
    this.route.params.subscribe((result: any) => {
      const { id } = result;
      console.log(id);

      // Fetch user details using the id
      this.api.viewAUserAPI(id).subscribe({
        next: (result: userModel) => {
          this.user = result;
          console.log(this.user);
        },
        error: (error) => {
          console.error('Error fetching user details', error);
        }
      });
    });
  }

  edit(id:any){
    this.api.editUserAPI(id,this.user).subscribe({
      next:(result:any)=>{
        console.log(result);
        alert("Employee details updated successfully")
        this.router.navigate(['/users'])

        
      }
    })
  }
}

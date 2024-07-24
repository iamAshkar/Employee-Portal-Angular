import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../../user.model';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userData:any=[] ;
p: number=1

constructor(private http:HttpClient,private api:UserApiService) { }
  ngOnInit(): void {
    this.getUsers()
  }
 getUsers(){
   this.api.getUserAPI().subscribe({
     next:(res:any)=>{
       console.log(res)
       this.userData=res
     },
     error:(err:any)=>{
       console.log(err)
     }
   })
 } 


 deleteUser(id:any){
   this.api.deleteUserAPI(id).subscribe({
     next:(res:any)=>{
       console.log(res)
       alert("user deleted successfully")
       this.getUsers()
     },
     error:(err:any)=>{
       console.log(err)

     }
   }) 
 }

 sortById() { 
   this.userData.sort((a:any, b:any) => a.id - b.id);
 }
 sortByName() { 
   this.userData.sort((a:any, b:any) => a.name.localeCompare(b.name));
 }


 generatePdf() {
  let pdf = new jsPDF();

  const head = [['Id', 'Name', 'Email', 'Active']];
  const body: any[] = [];

  this.userData.forEach((user: userModel) => {
    if (user.id !== 1) {
      body.push([user.id, user.name, user.email, user.active]);
    }
  });

  pdf.text('All users list', 10, 10);
  autoTable(pdf, { head, body });
  pdf.output('dataurlnewwindow');
  pdf.save('users.pdf');
}
}
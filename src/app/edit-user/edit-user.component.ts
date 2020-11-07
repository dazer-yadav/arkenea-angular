import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  firstname: string="";
  lastname: string="";
  email: string="";
  phoneNumber: string="";
  image: string="";
  data: any;
  enableBtn: boolean= false;
  id: string='';
  constructor(private userService: UserService, private http: HttpClient,private router: Router) { }

  ngOnInit() {
    console.log('called');
    this.data = this.userService.data;
    if(this.data){
      this.enableBtn = true;
      this.firstname  = this.data.firstname;
      this.lastname  = this.data.lastname;
      this.email = this.data.email;
      this.phoneNumber = this.data.phoneNumber;
      this.id= this.data._id;
    }
  }
  onSubmit(method: string){
    let url = 'http://localhost:3000/users'
    if(method=='submit'){
      this.http.post(url,{
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phoneNumber: this.phoneNumber
      }).subscribe((res)=>{
        let temp = res;
        alert('Data submitted successfully');
        this.router.navigate(['user']);
      })
    }else{
      url+='/'+this.id;
      this.http.put(url,{
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phoneNumber: this.phoneNumber
      }).subscribe((res)=>{
        alert('Data submitted successfully');
        this.router.navigate(['user']);
      })
    }
  }
    
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phoneNumber','actions'];
  data: any = [];
  // exampleDatabase: ExampleHttpDatabase | null;
  // data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _httpClient: HttpClient,
              private userService: UserService,
              private router: Router
    ) {}
  getUsersData(){
    let url = 'http://localhost:3000/users';
    this._httpClient.get(url).subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }
  ngAfterViewInit() {
    this.getUsersData();
  }

  onEdit(element){
    this.userService.data = element;
    // this.userService.userData.next(element);
    this.router.navigate(['edit-user']);

  }
  onDelete(id: string){
    let url = 'http://localhost:3000/users/'+id;
    this._httpClient.delete(url).subscribe((res)=>{
      console.log(res);
      alert('deleted');
      this.router.navigate(['user']);
    })
  }
}

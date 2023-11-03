import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import {UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService,private router:Router){ }

  ngOnInit(): void {
    //this.getUsers();
    this.getUsers();
      
  }

  // Don't know whyt method gives me an error 
   getUsers(){
    this.userService.getUsersList().subscribe(
      data => {this.users = data;
      }
    )
  }
  updateUser(id:number){
    this.router.navigate(['update-user',id]);

  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }
  userDetails(id:number){
    this.router.navigate(['user-details',id]);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  id: number;
  user: User;
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getUser(this.id);
  }

  getUser(id: number){
    this.userService.getUserById(id).subscribe(
      data => {this.user = data;
      }
    )
  }

}

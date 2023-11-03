import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  selectedState: string;
  id :number;
  US_STATES: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
    'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(){
    let lastUpdated: Date = new Date();
    this.user.lastUpdated=lastUpdated;

    this.updateUser();
  }
  updateUser() {
    this.userService.updateUser(this.id,this.user).subscribe(() => {
      this.goToUserList();
    });
  }
  
  goToUserList(){
    this.router.navigate(['/users']);
  }



  onItemSelected() {

    this.user.state = this.selectedState;
  }

}

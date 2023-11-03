import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  selectedState: string;
  US_STATES: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
    'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  validationError: string = 'Fill every value'; // To store validation error messages

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.validateForm()) {
      let currentDate: Date = new Date();
      let lastUpdated: Date = new Date();
      this.user.created = currentDate;
      this.user.lastUpdated = lastUpdated;
      console.log(this.user);

      this.saveUser();
    }
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.goToUserList();
    });
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onItemSelected() {
    this.user.state = this.selectedState;
  }

  // Validate the form and return true if all fields are non-null
  validateForm(): boolean {
    if (!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.address || !this.user.state) {
      this.validationError = 'Please fill in all fields.';
      return false;
    }
    this.validationError = ''; // Reset validation error message
    return true;
  }
}

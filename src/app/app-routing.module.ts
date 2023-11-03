import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

const routes: Routes = [
  {path:'users',component: UserListComponent},
  {path:'create-user',component: CreateUserComponent},
  {path:'update-user/:id',component: UpdateUserComponent},
  {path:'user-details/:id',component: UserDetailsComponent},
  {path:'', redirectTo: 'users',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

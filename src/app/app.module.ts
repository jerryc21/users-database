import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';

import {HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

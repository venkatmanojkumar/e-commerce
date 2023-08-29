import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './src/auth/auth-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminDashRoutingModule } from './src/admin/dashboard/admin-dash.routing.module';
import { UserDashRoutingModule } from './src/user/dashboard/user-dash.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './src/auth/login/login.component';
import { AuthModule } from './src/auth/auth.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    AuthModule,
    UserDashRoutingModule,
    AdminDashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

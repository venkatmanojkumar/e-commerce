import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}

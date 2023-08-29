import { Component } from '@angular/core';
import { Admin, User } from '../model/login.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const userCredentials: User[] = [
  { username: 'user1', password: 'password', role: 'user' },
  { username: 'user2', password: 'password', role: 'user' },
];
const adminCredentials: Admin[] = [
  { username: 'admin1', password: 'password', role: 'admin' },
  { username: 'admin2', password: 'password', role: 'admin' },
];
@Component({
  selector: 'app-login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const enteredUsername = this.loginForm.value.username;
      const enteredPassword = this.loginForm.value.password;

      // Combine user and admin credentials
      const allCredentials = [...userCredentials, ...adminCredentials];

      let foundCredential = null;

      // Loop through all credentials to find a match
      for (let i = 0; i < allCredentials.length; i++) {
        const credential = allCredentials[i];
        if (
          credential.username === enteredUsername &&
          credential.password === enteredPassword
        ) {
          foundCredential = credential;
          break; // Exit loop if a match is found
        }
      }

      if (foundCredential) {
        let isUserCredential = false;
        let isAdminCredential = false;

        // Check if the found credential belongs to a user or admin
        for (let i = 0; i < userCredentials.length; i++) {
          if (userCredentials[i].username === foundCredential.username) {
            isUserCredential = true;
            break;
          }
        }

        for (let i = 0; i < adminCredentials.length; i++) {
          if (adminCredentials[i].username === foundCredential.username) {
            isAdminCredential = true;
            break;
          }
        }

        // Navigate based on the credential type
        if (isUserCredential) {
          this.router.navigate(['/user-dash']);
        } else if (isAdminCredential) {
          this.router.navigate(['/admin-dash']);
        }
      } else {
        // Invalid credentials, show error message
        alert('Invalid username or password');
      }
    }
  }
}

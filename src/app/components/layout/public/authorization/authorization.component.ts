import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthorizationService } from '../../../../services/authorization.service';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
})
export class AuthorizationComponent {

  activePage:string = "";
  constructor(
    private router: Router,
    private authService: AuthorizationService,
    private dataService:DataService
  ) {}

  isLoginPage(): boolean {
    if (this.router.url.includes('signup')) {
      return false;
    }
    return true;
  }

  getAuthLink() {
    if (this.isLoginPage()) {
      return '/signup';
    }
    return '';
  }

  getContainerClass() {
    return this.isLoginPage() ? 'login-container' : 'signup-container';
  }

  getButtonClass() {
    return this.isLoginPage() ? 'login-submit-btn' : 'signup-submit-btn';
  }

  authorizeUser(username: string, password: string) {
    this.authService.authenticate(username, password).subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/dashboard']);
          this.dataService.setCurrentPage('dashboard');
        
        } else {
          alert('Invalid username or password');
        }
      },
      (error) => {
        console.error('Authentication error', error);
        alert('Failed to authenticate');
      }
    );
  }
}
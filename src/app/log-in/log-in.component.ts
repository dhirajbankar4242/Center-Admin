import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { StorageService } from '../service/storage.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Global } from '../admin/dto/dtos';
import { AdminModule } from '../admin/admin.module';
import { jwtDecode } from 'jwt-decode';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

interface CustomJwtPayload {
  tenantType: string;
}

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, AdminLayoutComponent, AdminModule, RouterOutlet, RouterModule, NgxPermissionsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  tenantType: string | null = null
  LogInForm: FormGroup

  constructor(private service: HttpService, private fb: FormBuilder, private router: Router, private localStorage: StorageService) {
    this.LogInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogIn() {
    if (this.LogInForm.valid) {
      const values = this.LogInForm.value
      this.service.login(values).subscribe(
        (result) => {
          if (result) {
            const decodedToken = jwtDecode<CustomJwtPayload>(result.token)
            // this.tenantType = decodedToken ? decodedToken.tenantType : null
            this.tenantType = decodedToken.tenantType
            this.localStorage.setTenantType('tenant', this.tenantType)
            // this.permissionService.addPermission(this.tenantType)
            // Login successful, handle the result (e.g., set user session, navigate)
            this.checkLogin(result);
            // Example: Set user session and navigate to home page
            // this.authService.setUserSession(result);
            this.router.navigate(['/admin/home']);
          }
        },
        (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'warning',
            text: 'Username or password incorrect  An error occurred during login. Please try again.'
          });
        }
      );
    }
  }

  checkLogin(result: any) {
    const localStorage = new StorageService()
    localStorage.setItem(Global.key_token, result.token);
    localStorage.setItem(Global.key_refresh_token, result.refreshToken);
    this.router.navigate(['/admin/home']);

    // this.localStorage.setItem(Global.key_firstName, result.loginData.firstName.en);
    // this.localStorage.setItem(Global.key_loginId, result.loginData.loginId);
    // this.localStorage.setItem(Global.key_role, result.loginData.role.en);

    // setTimeout(() => {
    //   let redirectUrl = 'home';
    //   this.router.navigate(['/admin/home']); 
    //   this.router.navigateByUrl(redirectUrl).then(() => {
    //     // this.toastr.success("Login successfully");
    //   });
    // }, 0);
  }
}

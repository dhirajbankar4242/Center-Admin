import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

  inviteToken: string | null = null;
  email: string | null = null;

  registerForm: FormGroup;
  // maskPredicate = { '0': { pattern: new RegExp('[0-9]') } };

  constructor( private formBuilder: FormBuilder, private service: HttpService, private router: Router, private route: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      invitationToken: ['', Validators.required],
      bcName: ['', Validators.required],
      email: ['', Validators.required],
      status: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z]).*$')]],
      confirmPassword: ['', Validators.required],
      village: ['', Validators.required],
      pinCode: ['', Validators.required],
      taluka: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.fetchBc();
  }

  fetchBc(): any {
    this.inviteToken = this.route.snapshot.paramMap.get('token');
    this.email = this.route.snapshot.queryParamMap.get('email');
    if (this.inviteToken && this.email) {
      this.service.fetchBc(this.inviteToken, this.email).subscribe(
        (response: any) => {
          if(response!=null){
          // response.status = 'active'
          this.registerForm.patchValue(response)
          }else{
            this.router.navigate(['/error']);
            console.error('Error fetching BC:');             
          }          
        },
        (error: any) => {
          this.router.navigate(['/error']);
          console.error('Error fetching BC:', error);       
        }
      );
    }
  }

  onSaveBC() {
    this.service.post('auth/onboard', this.registerForm.value).subscribe((response: any) => {
      // this.onUpdate()
      Swal.fire({
        text: 'Bc created successfully'
      });
      this.router.navigate(['']);
      // this.router.navigate(['/log_in']);
    }, (error: any) => {
      Swal.fire({
        text: 'Error while creating Bc'
      });
      console.error('Error:', error);
    })
  }

  // onUpdate() {
  //   this.service.put('auth', this.registerForm.value).subscribe(
  //     (response: any) => {

  //     },
  //     (error: any) => {
  //       Swal.fire({
  //         text: 'Error while creating grampanchayat'
  //       });
  //       console.error('Error:', error); // Handle error appropriately
  //       // Additional error handling or feedback to the user
  //     }
  //   );
  // }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
    if (passwordControl && confirmPasswordControl &&
      passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else if (confirmPasswordControl) {
      confirmPasswordControl.setErrors(null);
    }
  }

}

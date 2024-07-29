import { Component } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { HttpService } from '../../service/http.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private spinner:SpinnerVisibilityService, private service: HttpService, private storage:StorageService, private router:Router,private permissionService:NgxPermissionsService){}

  signOut() {
    this.spinner.show()
    this.storage.clear().then(() => {
      this.permissionService.flushPermissions();
      this.router.navigate([''])
      this.spinner.hide()
    });
  }

  onProfile(){
    this.router.navigate(['/admin/profile'])
  }

}

import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { StorageService } from '../../service/storage.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [HomeComponent,RouterModule,RouterOutlet,NgxPermissionsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor( private service: HttpService, private storage:StorageService, private router:Router,private permissionService:NgxPermissionsService){}
  
  ngOnInit(){
    this.permissionService.addPermission(this.storage.getItem('tenant'))    
  }

  signOut() {
    this.storage.clear().then(() => {
      this.permissionService.flushPermissions();
      this.router.navigate(['/log_in'])
    });
  }

}

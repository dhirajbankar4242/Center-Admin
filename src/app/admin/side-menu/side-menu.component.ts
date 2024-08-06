import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { StorageService } from '../../service/storage.service';
import { HttpService } from '../../service/http.service';
import { DashboardComponent } from './adminDashboard/dashboard.component';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [DashboardComponent,RouterModule,RouterOutlet,NgxPermissionsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  private arrows: NodeListOf<HTMLDivElement> | null = null;
  private sidebar: HTMLDivElement | null = null;
  private sidebarBtn: HTMLDivElement | null = null;

  constructor(private spinner:SpinnerVisibilityService, private service: HttpService, private storage:StorageService, private router:Router,private permissionService:NgxPermissionsService){
    
  }

  ngAfterViewInit() {
    this.arrows = document.querySelectorAll<HTMLDivElement>(".arrow");
    this.sidebar = document.querySelector<HTMLDivElement>(".sidebar");
    this.sidebarBtn = document.querySelector<HTMLDivElement>(".bx-menu");

    this.initEventListeners();
  }

  private initEventListeners() {
    if (this.arrows) {
      this.arrows.forEach(arrow => {
        arrow.addEventListener("click", this.toggleMenu.bind(this));
      });
    }

    if (this.sidebarBtn) {
      this.sidebarBtn.addEventListener("click", this.toggleSidebar.bind(this));
    }
  }

  private toggleMenu(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const arrowParent = target.parentElement?.parentElement;
    if (arrowParent) {
      arrowParent.classList.toggle("showMenu");
    }
  }

  private toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.classList.toggle("close");
    }
  }
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

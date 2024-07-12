import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { NgHttpLoaderModule, Spinkit } from 'ng-http-loader';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [ SideMenuComponent, RouterModule, RouterOutlet, NavbarComponent,NgHttpLoaderModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  
[x: string]: any;

public spinkit = Spinkit;

}

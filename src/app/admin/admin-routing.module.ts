import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./side-menu/adminDashboard/dashboard.component";
import { DataTableComponent } from "../common-master/data-table/data-table.component";
import { BrandComponentComponent } from "../brand-component/brand-component.component";
import { InviteBcComponent } from "./side-menu/invite-bc/invite-bc.component";
import { CustomerDashboardComponent } from "./side-menu/customer-dashboard/customer-dashboard.component";

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'bc_dashboard',
    component: CustomerDashboardComponent
  },
  {
    path: 'invite',
    component: InviteBcComponent
  },
  {
    path: 'dataTableComponent',
    component: DataTableComponent
  },
  {
    path: 'test',
    component: BrandComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
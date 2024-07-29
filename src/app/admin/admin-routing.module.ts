import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./side-menu/dashboard/dashboard.component";
import { NewRegistrationComponent } from "./side-menu/Matrimony/new-registration/new-registration.component";
import { RenewComponent } from "./side-menu/Matrimony/renew/renew.component";
import { NewRequirementComponent } from "./side-menu/website-app-developement/new-requirement/new-requirement.component";
import { ProductsComponent } from "./side-menu/website-app-developement/products/products.component";
import { CounsellingComponent } from "./side-menu/iSmartEducation/counselling/counselling.component";
import { CoursesComponent } from "./side-menu/iSmartEducation/courses/courses.component";
import { TalentSearchExamComponent } from "./side-menu/iSmartEducation/talent-search-exam/talent-search-exam.component";
import { TestSeriesComponent } from "./side-menu/iSmartEducation/test-series/test-series.component";
import { GoogleAdsComponent } from "./side-menu/Adway'sDigitalMarketing/google-ads/google-ads.component";
import { SmsMarketingComponent } from "./side-menu/Adway'sDigitalMarketing/sms-marketing/sms-marketing.component";
import { SocialMediaMarketingComponent } from "./side-menu/Adway'sDigitalMarketing/social-media-marketing/social-media-marketing.component";
import { WhatsAppMarketingComponent } from "./side-menu/Adway'sDigitalMarketing/whats-app-marketing/whats-app-marketing.component";
import { AudioVideoMakingComponent } from "./side-menu/Graphic'sDesign/audio-video-making/audio-video-making.component";
import { LogoDesignComponent } from "./side-menu/Graphic'sDesign/logo-design/logo-design.component";
import { PrintingServicesComponent } from "./side-menu/Graphic'sDesign/printing-services/printing-services.component";
import { YearlyPlanComponent } from "./side-menu/Graphic'sDesign/yearly-plan/yearly-plan.component";
import { GiveFranchiseComponent } from "./side-menu/Franchise/give-franchise/give-franchise.component";
import { TakeFranchiseComponent } from "./side-menu/Franchise/take-franchise/take-franchise.component";
import { G1NeedsComponent } from "./side-menu/g1-needs/g1-needs.component";
import { FinanceComponent } from "./side-menu/finance/finance.component";
import { DataTableComponent } from "../common-master/data-table/data-table.component";
import { BrandComponentComponent } from "../brand-component/brand-component.component";

const routes: Routes = [
  
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'matrimony/new-registration',
    component: NewRegistrationComponent
  },
  {
    path:'matrimony/renew',
    component: RenewComponent
  },
  {
    path:'website-app-development/new-requirement',
    component: NewRequirementComponent
  },
  {
    path:'website-app-development/products',
    component: ProductsComponent
  },
  {
    path:'i-smart-education/counseling',
    component: CounsellingComponent
  },
  {
    path:'i-smart-education/courses',
    component: CoursesComponent
  },
  {
    path:'i-smart-education/talent-search-exam',
    component: TalentSearchExamComponent
  },
  {
    path:'i-smart-education/test-series',
    component: TestSeriesComponent
  },
  {
    path:'adways-digital-marketing/google-ads',
    component: GoogleAdsComponent
  },
  {
    path:'adways-digital-marketing/sms-marketing',
    component: SmsMarketingComponent
  },
  {
    path:'adways-digital-marketing/social-media-marketing',
    component: SocialMediaMarketingComponent
  },
  {
    path:'adways-digital-marketing/whatsapp-marketing',
    component: WhatsAppMarketingComponent
  },
  {
    path:'graphics-design/audio-video-making',
    component: AudioVideoMakingComponent
  },
  {
    path:'graphics-design/logo-design',
    component: LogoDesignComponent
  },
  {
    path:'graphics-design/printing-services',
    component: PrintingServicesComponent
  },
  {
    path:'graphics-design/yearly-plan',
    component: YearlyPlanComponent
  },
  {
    path:'franchise/give-franchise',
    component: GiveFranchiseComponent
  },
  {
    path:'franchise/take-franchise',
    component: TakeFranchiseComponent
  },
  {
    path:'g1-needs',
    component: G1NeedsComponent
  },
  {
    path:'finance',
    component: FinanceComponent
  },
  {
    path:'dataTableComponent',
    component: DataTableComponent
  },
  {
    path:'test',
    component: BrandComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
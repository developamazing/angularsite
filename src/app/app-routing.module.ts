import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketersComponent } from './marketers/marketers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ConsumerofferbundlesComponent } from './consumerofferbundles/consumerofferbundles.component';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConsumerOffersComponent } from './consumeroffers/consumeroffers.component';
import { SupplierOffersComponent } from './supplieroffers/supplieroffers.component';

const routes: Routes = [
  { path: '' ,component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'marketers', component:MarketersComponent},
  { path:'suppliers', component:SuppliersComponent},
  { path:'offerbundles', component:ConsumerofferbundlesComponent},
  { path:'analytics', component: AnalyticsComponent},
  { path:'consumeroffers', component: ConsumerOffersComponent},
  { path:'supplieroffers', component: SupplierOffersComponent},
  { path: '**' ,component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

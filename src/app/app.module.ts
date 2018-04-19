import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MarketersComponent } from './marketers/marketers.component';
import { MarketerViewComponent } from './marketers/marketer.view';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ConsumerOffersComponent } from './consumeroffers/consumeroffers.component';
import { ConsumerofferbundlesComponent } from './consumerofferbundles/consumerofferbundles.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LikeFilterPipe } from './shared/filters/likeFilter.pipe';
import { ConsumerOfferFilterPipe } from './shared/filters/consumerOfferFilter.pipe';
import { DataService, CustomInterceptor } from './shared/services/dataService';
import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SupplierViewComponent } from './suppliers/supplier.view';
import { SupplierOffersComponent } from './supplieroffers/supplieroffers.component';
import { SupplierOfferFilterPipe } from './shared/filters/supplierOfferFilter.pipe';

import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module

@NgModule({
  declarations: [
    AppComponent,

    ErrorComponent,
    LikeFilterPipe,
    ConsumerOfferFilterPipe,
    SupplierOfferFilterPipe,

    MarketersComponent,
    MarketerViewComponent,
    SuppliersComponent,
    SupplierViewComponent,
    SupplierOffersComponent,
    ConsumerOffersComponent,
    ConsumerofferbundlesComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AnalyticsComponent
  ],
  providers:[
    Configuration, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
       multi: true,
    },
    DataService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

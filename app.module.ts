import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';
import { AboutComponent } from 'src/app/about/about.component';
import { AdminloginComponent } from 'src/app/adminlogin/adminlogin.component';
import { UserloginComponent } from 'src/app/userlogin/userlogin.component';
import { ImportComponent } from 'src/app/adminlogin/import/import.component';
import { UpdateipoComponent } from 'src/app/adminlogin/updateipo/updateipo.component';
import { CompareCompanyComponent } from 'src/app/userlogin/compare-company/compare-company.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { StockexchangeComponent } from 'src/app/adminlogin/stockexchange/stockexchange.component';
import { ManageComponent } from 'src/app/adminlogin/managecompany/manage.component';
import { StockpricelistComponent } from 'src/app/stockpricelist/stockpricelist.component';
import { StockpriceComponent } from 'src/app/adminlogin/stockprice/stockprice.component';
import { SectorslistComponent } from 'src/app/sectorslist/sectorslist.component';
import { SectorsComponent } from 'src/app/adminlogin/sectors/sectors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    AdminloginComponent,
    UserloginComponent,
    ImportComponent,
    ManageComponent,
    StockexchangeComponent,
    UpdateipoComponent,
    CompareCompanyComponent,
    AdminComponent,
    StockpricelistComponent,
    StockpriceComponent,
    SectorslistComponent,
    SectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { AboutComponent } from 'src/app/about/about.component';
import { AdminloginComponent } from 'src/app/adminlogin/adminlogin.component';
import { UserloginComponent } from 'src/app/userlogin/userlogin.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { ImportComponent } from 'src/app/adminlogin/import/import.component';
import { ManageComponent } from 'src/app/adminlogin/managecompany/manage.component';
import { CompareCompanyComponent } from 'src/app/userlogin/compare-company/compare-company.component';
import { StockexchangeComponent } from 'src/app/adminlogin/stockexchange/stockexchange.component';
import { UpdateipoComponent } from 'src/app/adminlogin/updateipo/updateipo.component';
import { IPOsComponent } from 'src/app/userlogin/ipos/ipos.component';
import { SectorsComponent } from 'src/app/adminlogin/sectors/sectors.component';
import { SectorslistComponent } from 'src/app/sectorslist/sectorslist.component';
import { StockpriceComponent } from 'src/app/adminlogin/stockprice/stockprice.component';
import { StockpricelistComponent } from 'src/app/stockpricelist/stockpricelist.component';

const routes: Routes = [{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"about",component:AboutComponent},
{path:"admin",component:AdminComponent},
{path:"adminlogin",component:AdminloginComponent},
{path:"userlogin",component:UserloginComponent},
{path:"import",component:ImportComponent},
{path:"manage",component:ManageComponent},
{path:"stockexchange",component:StockexchangeComponent},
{path:"updateipo",component:UpdateipoComponent},
{path:"comparecompany",component:CompareCompanyComponent},
{path:"other",component:IPOsComponent},
{path:"sectors",component:SectorsComponent},
{path:"sectorslist",component:SectorslistComponent},
{path:"stockprice",component:StockpriceComponent},
{path:"stockpricelist",component:StockpricelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


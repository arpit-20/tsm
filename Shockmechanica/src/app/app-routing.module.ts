import { DeveloperTeamComponent } from './developer-team/developer-team.component';
import { ManageAdminComponent } from './admin-dashboard/manage-admin/manage-admin.component';
import { OthersComponent } from './serviceorder/others/others.component';
import { PurchaseComponent } from './serviceorder/purchase/purchase.component';
import { OrdersListComponent } from './admin-dashboard/orders-list/orders-list.component';
import { BlogComponent } from './blog/blog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { ServiceorderComponent } from './serviceorder/serviceorder.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewadminComponent } from './admin-dashboard/newadmin/newadmin.component';
import { ServiceComponent } from './serviceorder/service/service.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'myaccount', component: AdminDashboardComponent},
  {path: 'developer', component: DeveloperTeamComponent},
  {path: 'services', component: ServiceorderComponent,
children: [
  {path: 'service', component: ServiceComponent},
{path: 'buy', component: PurchaseComponent},
{path: 'others', component: OthersComponent},
]},
  {path: 'login', component: LoginComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent,
   children: [
    {path: 'orders', component: OrdersListComponent},
    {path: 'create', component: NewadminComponent},
    {path: 'manage-admin', component: ManageAdminComponent},
   ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

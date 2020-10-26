import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MsalGuard } from '@azure/msal-angular';
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
    {path: '', component: Page1Component, canActivate: [MsalGuard],},
    {
      path:'page1', component: Page1Component, canActivate:[MsalGuard]
    },
    {
      path: 'page2', component: Page2Component, canActivate: [MsalGuard]
    },
    {
      path: 'page3', component: Page3Component, canActivate: [MsalGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

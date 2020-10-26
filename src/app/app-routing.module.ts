import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MsalGuard } from '@azure/msal-angular';
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
    {path: '',
    component: Page1Component,
    canActivate: [MsalGuard],},
    {
      path: 'Modifica', component: Page2Component, canActivate: [MsalGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

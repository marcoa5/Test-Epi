import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
    {path: '',
    component: MainComponent,
    canActivate: [MsalGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MsalModule } from '@azure/msal-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DialogComponent,
  ],
  imports: [
    MsalModule.forRoot({
    auth:{
      clientId:'bdea7110-6cd8-4cc4-a70a-9f0bb9ca1e92'
    }
    }),
    BrowserModule, MatDialogModule,
    AppRoutingModule, MatSidenavModule, MatButtonModule, BrowserAnimationsModule, MatToolbarModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), MatIconModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

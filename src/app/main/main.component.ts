import { Component, OnInit, Inject } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showFiller = false;
  profile;
  nome;
  env;
  ch:boolean=false;
  constructor(private authService: MsalService,public dialog: MatDialog) { }

  ngOnInit() {
    this.profile = this.authService.getAccount().userName;
    this.nome = this.authService.getAccount().name;
    this.env = this.authService.getAccount().accountIdentifier;
  }

  logout(){
    this.authService.logout();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
    }
}


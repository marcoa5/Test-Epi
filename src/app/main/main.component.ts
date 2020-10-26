import { Component, OnInit, Inject } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { MAT_DRAWER_CONTAINER } from '@angular/material/sidenav/drawer';
import { $ } from 'protractor';


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
  constructor(private authService: MsalService,public dialog: MatDialog, private router: Router) { }

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

  home(){
    this.router.navigate(['']);
  }
  modifica(){
    this.router.navigate(['Modifica']);
  }
  
}


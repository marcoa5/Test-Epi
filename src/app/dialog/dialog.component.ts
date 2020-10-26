import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  nome:string;
  constructor(public dialog: MatDialog,private authService: MsalService) { }

  ngOnInit(): void {
    let a = this.authService.getAccount().name
    this.nome = a.substring(0, a.indexOf(" "));
  }

  chiudi(){
    this.dialog.closeAll();
  }

  logout(){
    this.authService.logout();
  }

}

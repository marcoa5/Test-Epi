import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog,private authService: MsalService) { }

  ngOnInit(): void {
  }

  chiudi(){
    this.dialog.closeAll();
  }

  logout(){
    this.authService.logout();
  }

}

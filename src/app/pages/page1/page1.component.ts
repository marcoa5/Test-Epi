import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  nome: string;
  mail: string;
  constructor(private auths: MsalService) { }

  ngOnInit(): void {
    let a = this.auths.getAccount().name;
    this.nome = a.substring(0,a.indexOf(" "));
    this.mail = this.auths.getAccount().userName;
  }
  

}

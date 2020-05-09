import { Component } from "@angular/core";

@Component({
  template: `
    <mat-toolbar color="primary">
      <div fxHide.gt-sm="true">
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <a mat-button class="companyName" routerLink="/">
        <span>İklim Tarihi</span>
      </a>
      <span class="example-spacer"></span>
      <div fxHide.lt-md="true">
        <a mat-button routerLink="/logged">Anasayfa</a>
        <a mat-button routerLink="/logged/istatistik">İstatistik</a>
      </div>
    </mat-toolbar>
    <mat-sidenav-container fxFlexFill class="example-container">
      <mat-sidenav
        color="primary"
        #sidenav
        fxLayout="column"
        mode="over"
        opened="false"
        fxHide.gt-sm="true"
      >
        <div fxLayout="column">
          <a mat-button routerLink="/logged">Anasayfa</a>
          <a mat-button routerLink="/logged/istatistik">İstatistik</a>
        </div>
      </mat-sidenav>
      <mat-sidenav-content fxFlexFill>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class LoggedComponent {}

import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule, MatDividerModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighchartsChartModule } from "highcharts-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { ClimatesComponent } from "./climates/climates.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { fakeBackendProvider } from "./helpers/fake-backend";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { HomeComponent } from "./home/home.component";
import { LoggedComponent } from "./logged/logged.component";
import { LoginComponent } from "./login/login.component";
import { ClimateService } from "./services/climate.service";
import { TextShrinkPipe } from "./table-text-shrink.pipe";

@NgModule({
  declarations: [
    AppComponent,
    GraphicsComponent,
    ClimatesComponent,
    TextShrinkPipe,
    HomeComponent,
    LoginComponent,
    LoggedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    MatButtonModule,
    HighchartsChartModule,
    MatCheckboxModule,
    MatSortModule,
    MatDividerModule,
    MatInputModule,
    CdkTableModule,
    CdkTreeModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ClimateService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

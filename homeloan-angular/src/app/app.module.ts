import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoanComponent } from './loan/loan.component';
import { LoanlistComponent } from './loanlist/loanlist.component';
import { CapitaldetailsComponent } from './capitaldetails/capitaldetails.component';
import { CapitallistComponent } from './capitallist/capitallist.component';
import { EmicalculatorComponent } from "./emicalculator/emicalculator.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { SearchComponent } from './search/search.component';
import { EligiblitycalComponent } from './eligiblitycal/eligiblitycal.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthdocComponent } from './authdoc/authdoc.component';
import { AuthdoclistComponent } from './authdoclist/authdoclist.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    CustomerlistComponent,
    LoanComponent,
    LoanlistComponent,
    CapitaldetailsComponent,
    CapitallistComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    AdmindashbordComponent,
    SearchComponent,
    EmicalculatorComponent,
    EligiblitycalComponent,
    CalculatorComponent,
    AuthdocComponent,
    AuthdoclistComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

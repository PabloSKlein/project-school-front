import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { TableModule } from 'primeng/table'
import { MenuModule } from 'primeng/menu'
import { SidebarModule } from 'primeng/sidebar'
import { AppComponent } from './app.component';
import { PersonDashboardComponent } from './person/dashboard/person-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
    declarations: [
        AppComponent, 
        PersonDashboardComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        NgFor,
        TableModule,
        MenuModule,
        SidebarModule,
        ButtonModule,
        InputTextareaModule,
        InputTextModule
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
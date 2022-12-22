import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './components/tables/tables.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';
import { TableDetailComponent } from './components/table-detail/table-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './services/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TableDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }
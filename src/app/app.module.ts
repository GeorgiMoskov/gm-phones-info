import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatInputModule 
} from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phones/phone-list.component';
import { PhoneViewComponent } from './phones/phone-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

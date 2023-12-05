import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DeviceService } from './device/device.service';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { WinsComponent } from './wins/wins.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

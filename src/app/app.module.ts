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
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { HomeComponent } from './home/home.component';
import { WinsComponent } from './wins/wins.component';
import { ContactComponent } from './contact/contact.component';
import { LazyImgDirective } from './lazy-img-directive/lazy-img.directive';
import { ViewImageDialogComponent } from './view-image-dialog/view-image-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinsComponent,
    ContactComponent,
    LazyImgDirective,
    ViewImageDialogComponent
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
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

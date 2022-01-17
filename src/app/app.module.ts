import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, NavbarComponent, NotFoundComponent, DateCountPipe, ColorDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

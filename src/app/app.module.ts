import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { FooterComponent } from './shared/footer/footer.component';

import { HttpClientModule} from '@angular/common/http';
import { AlquilerService } from './components/alquiler/alquiler.service';
@NgModule({
  declarations: [
   
    AppComponent,  
    NavbarComponent, FooterComponent  
  ],
  imports: [
    
    ComponentsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [AlquilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

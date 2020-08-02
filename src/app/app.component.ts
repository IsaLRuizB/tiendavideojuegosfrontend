import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
  
  public location: Location

    constructor( ) {}
    ngOnInit() {
          
               

    }
   
   
  }

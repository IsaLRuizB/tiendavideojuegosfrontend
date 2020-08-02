
import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { JuegoComponent } from './juego/juego.component';
import { ComprasComponent } from './compras/compras.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [      
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule  
       
    ],
    declarations: [
        ComponentsComponent,
        AlquilerComponent,
        JuegoComponent,
        ComprasComponent,
        ClienteComponent
      
        
    ],
    
    entryComponents: [],
    exports:[ ComponentsComponent ]
})

export class ComponentsModule { }

import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { JuegoComponent } from './components/juego/juego.component';
import { ComprasComponent } from './components/compras/compras.component';


const routes: Routes =[
   
    { path: '', component: ComponentsComponent },
    { path: 'balance', component: AlquilerComponent },
    { path: 'alquiler', component: AlquilerComponent },
    { path: 'juego', component: JuegoComponent },
    { path: 'compras', component: ComprasComponent }
    /*{path:'', component:ComponentsComponent
    children:[
        {path:'', loadChildren:'./components/components.module#ComponentsModule' }
    ]
}*/
];

@NgModule({
    imports: [
     
      RouterModule.forRoot(routes,{
        useHash: true
      })
    ],
    exports: [
    ],
  })

  export class AppRoutingModule { }

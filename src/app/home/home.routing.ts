import { RouterModule,Routes  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';


let routes:Routes =[
    {path:'',
    children:[
     { path:'', component:HomeComponent}]}
  ]

  export let HomeRouting : ModuleWithProviders= RouterModule.forChild(routes)
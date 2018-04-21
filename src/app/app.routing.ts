import {  ModuleWithProviders  } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';



let routes:Routes=[
    {
    path:'',
    redirectTo:'/home',
    pathMatch:"full"
  },
  {
  path:'home', loadChildren:'./home/home.module#HomeModule'
  }
  ]

  export let AppRouting : ModuleWithProviders = RouterModule.forRoot(routes);
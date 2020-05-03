import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dz1Component } from './dz1/dz1.component';
import { RouterModule, Routes } from '@angular/router';
import { DZ2Component } from './dz2/dz2.component';

const appRoutes: Routes = [
  {path: 'DZ', component: Dz1Component},
  {path: 'DDD', component:DZ2Component},

];




@NgModule({
  declarations: [
    AppComponent,
    Dz1Component,
    DZ2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(
        appRoutes,
        {enableTracing: true} // <-- debugging purposes only
      )
      ,
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

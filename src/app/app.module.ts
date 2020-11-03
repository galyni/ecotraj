import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatCardModule} from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  { path: '', component: AccueilComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatCardModule, MatButtonModule, MatInputModule, MatListModule, MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

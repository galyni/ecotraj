import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatCardModule} from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ApiService } from './api.service';
import { ConseilsComponent } from './conseils/conseils.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TutoComponent } from './tuto.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

const routes = [
  { path: '', component: PresentationComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'tuto', component: TutoComponent },
  { path: 'conseils', component: ConseilsComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    ConseilsComponent,
    PresentationComponent,
    TutoComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    MatCardModule, MatButtonModule, MatInputModule, MatListModule, MatCheckboxModule, MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

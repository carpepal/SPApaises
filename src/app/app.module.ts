import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CapitalPageComponent } from './pais/pages/capital-page/capital-page.component';
import { PaisPageComponent } from './pais/pages/pais-page/pais-page.component';
import { RegionPageComponent } from './pais/pages/region-page/region-page.component';
import { VerPaisPageComponent } from './pais/pages/ver-pais-page/ver-pais-page.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaisModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

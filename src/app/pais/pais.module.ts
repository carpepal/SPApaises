import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { VerPaisPageComponent } from './pages/ver-pais-page/ver-pais-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { SearchComponent } from './components/search/search.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CapitalPageComponent,
    PaisPageComponent,
    VerPaisPageComponent,
    RegionPageComponent,
    SearchComponent,
    PaisTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports: [
    CapitalPageComponent,
    PaisPageComponent,
    VerPaisPageComponent,
    RegionPageComponent
  ],
})
export class PaisModule { }

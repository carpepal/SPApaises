import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.css']
})
export class RegionPageComponent {



  constructor(private paisService: PaisService) { }



  termino: string = '';
  hayerror: boolean = false;
  paises: Country[] = [];

  buscar(termino : string ){
    this.paises = [];
    this.hayerror = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPaisPorRegion(this.termino).subscribe((data) => {
      console.log(data);
      this.paises = data;
    } , (err)=>{
      this.hayerror = true;
    });
  }

  handleData(event: Country[]){
    this.paises= event;
  }

  handleError(event: boolean){
    console.log(event);
    this.hayerror = event;
    this.paises = [];
  }

  sugerencias( termino : string){

    this.hayerror= false;
  }

}

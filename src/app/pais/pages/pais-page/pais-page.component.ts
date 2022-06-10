import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styleUrls: ['./pais-page.component.css']
})
export class PaisPageComponent  {

  constructor(private paisService: PaisService) { }



  termino: string = '';
  hayerror: boolean = false;
  paises: Country[] = [];

  buscar(termino : string ){
    this.paises = [];
    this.hayerror = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((data) => {
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

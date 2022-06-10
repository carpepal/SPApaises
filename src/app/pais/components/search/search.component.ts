import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/countryInterface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  styles:[
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class SearchComponent implements OnInit{

  constructor(private paisService: PaisService) { }



  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((valor)=>{
      console.log('debounce',valor);
      if (valor == '') return;
      this.onDebounce.emit(valor as string);
      this.buscar();
    });
  }

  termino: string = '';
  @Output() onEnter : EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter<string>();
  @Input() paises: Country[] = [];

  debouncer: Subject<String> = new Subject<String>();

  buscar(){
    this.onEnter.emit(this.termino);
  }

  presionar(){

    this.debouncer.next(this.termino);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent  {

  constructor() { }

  @Input() paises!: Country[];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-pais-page',
  templateUrl: './ver-pais-page.component.html',
  styleUrls: ['./ver-pais-page.component.css']
})
export class VerPaisPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 pais: any = {
    nombre: 'Bolivia',
 }
}

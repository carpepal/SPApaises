import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countryInterface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais-page',
  templateUrl: './ver-pais-page.component.html',
  styleUrls: ['./ver-pais-page.component.css']
})
export class VerPaisPageComponent implements OnInit {

  constructor(
    private activateRoute : ActivatedRoute,
    private paisService : PaisService

    ) { }

  pais !: Country

  ngOnInit(): void {

    this.activateRoute.params.pipe(
      switchMap( ({id})=>this.paisService.getPaisbyId(id)),
      tap(console.log)
    ).subscribe(pais=>this.pais=pais[0]);
      console.log(this.pais);

  }

}

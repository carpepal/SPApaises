import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countryInterface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http: HttpClient) { }

  termino: string = '';
  ApiUrl:string ='https://restcountries.com/v3.1/';



  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}name/${termino}`;

    return this.http.get<Country[]>(url);
    // .pipe(catchError(err=> of([])));
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}capital/${termino}`;

    return this.http.get<Country[]>(url);
    // .pipe(catchError(err=> of([])));
  }

  buscarPaisPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}region/${termino}`;

    return this.http.get<Country[]>(url);
    // .pipe(catchError(err=> of([])));
  }

  getPaisbyId(id: string): Observable<Country> {
    const url = `${this.ApiUrl}alpha/${id}`;

    return this.http.get<Country>(url);
    // .pipe(catchError(err=> of([])));
  }

}

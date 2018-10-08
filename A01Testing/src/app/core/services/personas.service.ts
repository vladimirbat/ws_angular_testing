
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Persona } from '../model/Persona';
import { MATRIZ_PERSONAS } from '../data/matriz_personas';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable() // Declara esta clase como servicio
export class PersonasService{
    private _personas: Persona[];// = MATRIZ_PERSONAS;
    constructor(private http: HttpClient) {
    }

    get personas(): Observable<Persona[]> {// Retorna un observable
        let url = 'http://localhost:3001/personas';
        return this.http.get<Persona[]>(url);
    }

    insertar(p: Persona): Observable<Persona> {
        let url = 'http://localhost:3001/personas';
        let cabeceras: HttpHeaders =  new HttpHeaders().set('Content-Type','application/json');
        let opciones:any = {headers: cabeceras};
        return this.http.post<Persona>(url, p, opciones).pipe(
            catchError(this.handleError)
        );
    }
    borrar(dni: number): Observable<Persona> {
        let url = 'http://localhost:3001/personas/' + dni;
        return this.http.delete<Persona>(url);
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // Error de cliente o de red.
            console.error('Error:', error.error.message);
          } else {
            // Codigo de error del servidor
            console.error(
              `Error del servidor con código: ${error.status}, ` +
              `y mensaje: ${error.error}`);
          }
          // Mensaje par el usuario retornado en un observable.
          return new ErrorObservable('Tenemos problemas de comunicación con el servidor');
      };
}

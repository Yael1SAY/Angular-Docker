import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<any[]>{
    return this.http.get<any[]>(`${URL}users`)
    .pipe(
      catchError(e =>{
        if(e.status==0){
          console.log("Error estatus 0")
          return throwError(e);
        }
        if(e.status==401){
          console.log("Error estatus 401")
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}


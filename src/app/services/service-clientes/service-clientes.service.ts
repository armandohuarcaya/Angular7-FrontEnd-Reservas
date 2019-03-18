import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientesService {
  baseurl = "http://127.0.0.1:8000";

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllPerson(): Observable<any>{
    return this.http.get(this.baseurl + '/api/naturalpersons', {headers: this.httpHeaders});
  }
  getOnePerson(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/naturalpersons/' + id + '', {headers: this.httpHeaders});
  }
  updatePerson(person): Observable<any>{
    const body = {nombre: person.nombre, apePater: person.apePater,
      apeMater: person.apeMater, edad: person.edad, fecNacim: person.fecNacim,
      dni: person.dni, email: person.email, celular: person.celular,
       estado: person.estado};
    return this.http.put(this.baseurl + '/api/naturalpersons/' + person.id + '', body, {headers: this.httpHeaders});
  }
  createPerson(person): Observable<any>{
    const body = {nombre: person.nombre, apePater: person.apePater,
      apeMater: person.apeMater, edad: person.edad, fecNacim: person.fecNacim,
      dni: person.dni, email: person.email, celular: person.celular,
       estado: person.estado};
    return this.http.post(this.baseurl + '/api/naturalpersons', body, {headers: this.httpHeaders});
  }
  deletePerson(id): Observable<any>{
    return this.http.delete(this.baseurl + '/api/naturalpersons/' + id + '', {headers: this.httpHeaders});
  }

}

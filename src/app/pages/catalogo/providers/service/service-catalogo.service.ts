import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCatalogoService {
  baseurl = "http://127.0.0.1:8000";

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    protected httpClient: HttpClient,
    // protected endPoint: string,
) { }

public getAll$(): Observable<any> {
    // const params = { all: 'true' };
    return this.httpClient.get(this.baseurl + '/api/catalogos', {headers: this.httpHeaders});
}

public getWithQuery$(params: any): Observable<any> {
    return this.httpClient.get('', { params: params });
}

public getById$(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/${id}/`);
}

public add$(entity: any): Observable<any> {
    return this.httpClient.post(this.baseurl, entity);
}

public update$(id: any): Observable<any> {
    return this.httpClient.put(this.baseurl + '/api/naturalpersons/' + id + '', {headers: this.httpHeaders});
}

public delete$(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseurl}/${id}/`);
}

}

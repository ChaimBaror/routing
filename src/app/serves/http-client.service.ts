import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public http:HttpClient) { }


  httpget() : Observable<any>{
    return this.http.get<any>('https://raw.githubusercontent.com/ChaimBaror/ajax/master/db/doc.json')

  }

}

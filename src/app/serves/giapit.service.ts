import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ObjApi } from '../obj-api';




@Injectable({
  providedIn: 'root'
})
export class GiapitService {

  url = {
    israel : "https://coronavirus-19-api.herokuapp.com/countries/israel",
    World : "https://coronavirus-19-api.herokuapp.com/countries",
    c : "https://api.covid19api.com/live/country/Israel/status/confirmed",

  }
  
  

  constructor(private http:HttpClient) { }

  httpget(url) : Observable<ObjApi>{
    return this.http.get<ObjApi>(url)

    
}
}
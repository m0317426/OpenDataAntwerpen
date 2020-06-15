import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {RootObject} from '../Class/RootObject';

@Injectable({
  providedIn: 'root'
})
export class MonumentenService {
  private _url: string ="https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/629/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  constructor(private http:HttpClient) { }

    getMonumenten(): Observable<RootObject>{
    return this.http.get<RootObject>(this._url);
}
}

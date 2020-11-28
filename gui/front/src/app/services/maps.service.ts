import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {merge} from 'rxjs';
import {Q3Map} from '../interfaces/q3map';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  apiURL = `${environment.apiBaseUrl}${environment.apiBasePath}/maps`;

  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) {}

  public get() {
    return merge (
      this.httpClient.get<Q3Map[]>(`${this.apiURL}/`),
      this.socket.fromEvent<Q3Map[]>('maps:list')
    );
  }

  // public getServerInfo() {
  //   return merge (
  //     this.httpClient.get<RconServerInfo[]>(`${this.apiURL}/serverinfo`),
  //     // this.socket.fromEvent<RconStatus>('rcon:status')
  //   );
  // }

  setMap(name: string) {
    this.httpClient.post(`${this.apiURL}/`, {setMap: name}).subscribe(() => {
      // Success
    });
  }
}

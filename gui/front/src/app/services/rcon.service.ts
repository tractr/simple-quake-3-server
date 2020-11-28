import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RconStatus } from '../interfaces/status.rcon';
import { RconServerInfo } from '../interfaces/serverinfo.rcon';

import { merge } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RconService {
  apiURL = `${environment.apiBaseUrl}${environment.apiBasePath}/rcon`;

  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) {}

  public getStatus() {
    return merge (
      this.httpClient.get<RconStatus>(`${this.apiURL}/status`),
      this.socket.fromEvent<RconStatus>('rcon:status')
    );
  }

  public getServerInfo() {
    return merge (
      this.httpClient.get<RconServerInfo[]>(`${this.apiURL}/serverinfo`),
      // this.socket.fromEvent<RconStatus>('rcon:status')
    );
  }

  public setVar(q3Var: string, value?: string) {
      this.httpClient.post<string>(`${this.apiURL}/setVar`, {q3Var, value}).subscribe();
  }
}


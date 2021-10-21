import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RconStatus } from '../interfaces/status.rcon';
import { RconServerInfo } from '../interfaces/serverinfo.rcon';

import { BehaviorSubject, merge } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class RconService {
	private readonly apiURL = `${environment.apiBaseUrl}${environment.apiBasePath}/rcon`;

	private refreshStatus$ = new BehaviorSubject<void>(undefined);
	readonly status$ = merge(
		this.refreshStatus$.pipe(
			switchMap(() =>
				this.httpClient.get<RconStatus>(`${this.apiURL}/status`)
			)
		),
		this.socket.fromEvent<RconStatus>('rcon:status')
	).pipe(shareReplay(1));

	private refreshServerInfo$ = new BehaviorSubject<void>(undefined);
	readonly serverInfo$ = this.refreshServerInfo$.pipe(
		switchMap(() =>
			this.httpClient.get<RconServerInfo[]>(`${this.apiURL}/serverinfo`)
		),
		shareReplay(1)
	);

	constructor(private httpClient: HttpClient, private socket: Socket) {}

	public randomMap(): Promise<string> {
		return this.httpClient
			.get<string>(`${this.apiURL}/randommap`)
			.pipe(tap(() => this.refreshStatus$.next(undefined)))
			.toPromise();
	}

	public async setVar(q3Var: string, value?: string): Promise<string> {
		// Avoid errors on forbidden vars
		if (!this.getSettableVariables().includes(q3Var)) {
			return undefined;
		}
		return await this.httpClient
			.post<string>(`${this.apiURL}/setVar`, { q3Var, value })
			.pipe(tap(() => this.refreshServerInfo$.next(undefined)))
			.toPromise();
	}

	public getSettableVariables(): string[] {
		// Keep this sync with gui/back/src/api/rcon/rcon.service.js
		return [
			'g_spskill',
			'bot_minplayers',
			'fraglimit',
			'capturelimit',
			'timelimit',
			'g_gametype',
			'mapname',
		];
	}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { RconService } from './services/rcon.service';
import { RconStatus } from './interfaces/status.rcon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
	private rconData: RconStatus;
	mapSrc = './assets/quake-3-icon.png';
	private unsubscribe = new Subject<void>();

	constructor(private rcon: RconService) {}

	ngOnInit(): void {
		this.rcon.status$.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
			this.rconData = res;
			const image = this.rconData.currentMap
				? `${this.rconData.currentMap}.jpg`
				: 'quake-3-icon.png';
			this.mapSrc = `./assets/images/${image}`;
		});
	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
	}
}

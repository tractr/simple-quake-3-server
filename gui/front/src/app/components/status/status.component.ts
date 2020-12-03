import {Component, EventEmitter, OnDestroy, OnInit, Output,} from '@angular/core';
import {TableDataSource, ValidatorService} from 'angular4-material-table';
import {RconService} from '../../services/rcon.service';
import {RconServerInfo} from '../../interfaces/serverinfo.rcon';
import {RconServerInfoValidatorService} from '../../services/rcon-server-info-validator.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
	selector: 'app-status',
	providers: [
		{ provide: ValidatorService, useClass: RconServerInfoValidatorService },
	],
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit, OnDestroy {
	private rconServerInfo: RconServerInfo[] = [];
	private currentServerInfo: RconServerInfo[];
	private unsubscribe = new Subject<void>();
	displayedColumns = ['name', 'value', 'actionsColumn'];
	dataSource: TableDataSource<RconServerInfo>;
	settableVariables: string[];

	@Output() RconServerInfoListChange = new EventEmitter<RconServerInfo[]>();

	constructor(
		private rcon: RconService,
		private RconServerInfoValidator: ValidatorService
	) {
	  this.settableVariables = this.rcon.getSettableVariables();
		this.RconServerInfoListChange.subscribe((data: RconServerInfo[]) => {
			// Update values one by one
			if (this.currentServerInfo) {
				for (const { name, value } of data) {
					const current = this.currentServerInfo.find(
						(i) => i.name === name
					);
					if (
						typeof current === 'undefined' ||
						current.value !== value
					) {
						this.rcon.setVar(name, value);
					}
				}
			}
			// Save last values
			this.currentServerInfo = data;
		});
	}

	ngOnInit() {
		this.rcon
			.getServerInfo()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe((serverInfo) => {
				this.rconServerInfo = serverInfo;
				this.currentServerInfo = serverInfo;
				this.dataSource.updateDatasource(serverInfo, {
					emitEvent: false,
				});
			});

		this.dataSource = new TableDataSource<RconServerInfo>(
			this.rconServerInfo,
			RconServerInfo,
			this.RconServerInfoValidator
		);
		this.dataSource.datasourceSubject
			.pipe(takeUntil(this.unsubscribe))
			.subscribe((RconServerInfoList) =>
				this.RconServerInfoListChange.emit(RconServerInfoList)
			);
	}

	ngOnDestroy(): void {
		this.unsubscribe.next();
	}
}

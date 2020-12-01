import {Component, OnDestroy, OnInit} from '@angular/core';
import {RconService} from '../../services/rcon.service';
import {RconStatus} from '../../interfaces/status.rcon';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  rconData: RconStatus;
  botLevel = 3;
  minPlayers = 3;
  minPlayersValues = Array(13).fill(0).map((x, i) => i);
  botsCount = 0;
  onlinePlayersCount = 0;
  private unsubscribe = new Subject<void>();

  constructor(private rcon: RconService) { }

  ngOnInit() {
    this.rcon.getStatus().pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.rconData = res;
      this.botsCount = res.players.filter(p => p.address === '^7bot').length;
      this.onlinePlayersCount = res.players.length - this.botsCount
    });
    this.rcon.getServerInfo().pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      const minPlayers = res.find(r => r.name === 'bot_minplayers');
      if (minPlayers) {
        this.minPlayers = Number(minPlayers.value);
      }
      const botLevel = res.find(r => r.name === 'g_spskill');
      if (botLevel) {
        this.botLevel = Number(botLevel.value);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onBotLevelChanged() {
    this.rcon.setVar('g_spskill', this.botLevel.toString())
  }
  onMinPlayersChanged() {
    this.rcon.setVar('bot_minplayers', this.minPlayers.toString())
  }
}

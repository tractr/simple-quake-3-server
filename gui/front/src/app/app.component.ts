import { Component, OnInit} from '@angular/core';
import {RconService} from './services/rcon.service';
import {RconStatus} from './interfaces/status.rcon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Quake WebUI';
  rconData: RconStatus;
  mapSrc = './assets/quake-3-icon.png';

  constructor(private rcon: RconService) {}

  ngOnInit(): void {
    this.rcon.getStatus().subscribe(res => {
      this.rconData = res;
      const image = this.rconData.currentMap ? `${this.rconData.currentMap}.jpg` : 'quake-3-icon.png';
      this.mapSrc = `./assets/images/${image}`;
    });
  }
}

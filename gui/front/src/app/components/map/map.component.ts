import { Component, OnInit } from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {Q3Map} from '../../interfaces/q3map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  dmMaps: Q3Map[];
  ctfMaps: Q3Map[];

  constructor(private mapService: MapsService) { }

  ngOnInit() {
    this.mapService.get().subscribe(maps => {
      this.dmMaps = maps.filter(m => m.type === 'dm');
      this.ctfMaps = maps.filter(m => m.type === 'ctf');
    });
  }

  public setMap(name: string) {
    this.mapService.setMap(name);
  }
}

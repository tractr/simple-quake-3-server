import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {Q3Map} from '../../interfaces/q3map';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  dmMaps: Q3Map[];
  ctfMaps: Q3Map[];
  private unsubscribe = new Subject<void>();

  constructor(private mapService: MapsService) { }

  ngOnInit() {
    this.mapService.get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(maps => {
        this.dmMaps = maps.filter(m => m.type === 'dm');
        this.ctfMaps = maps.filter(m => m.type === 'ctf');
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  public setMap(name: string) {
    this.mapService.setMap(name);
  }
}

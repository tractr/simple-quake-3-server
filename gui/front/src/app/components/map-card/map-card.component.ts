import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Q3Map} from "../../interfaces/q3map";

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {

  @Input() map: Q3Map;
  @Output() play = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}

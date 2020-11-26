import { Component, OnInit } from '@angular/core';
import {RconService} from '../../services/rcon.service';
import {RconStatus} from '../../interfaces/status.rcon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rconData: RconStatus;

  constructor(private rcon: RconService) { }

  ngOnInit() {
    this.rcon.getStatus().subscribe(res => this.rconData = res);
  }
}

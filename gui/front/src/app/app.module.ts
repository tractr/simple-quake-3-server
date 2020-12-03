import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StatusComponent } from './components/status/status.component';
import { HomeComponent } from './components/home/home.component';
import { RconService } from './services/rcon.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Q3nameDirective } from './directives/q3name.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RconServerInfoValidatorService } from './services/rcon-server-info-validator.service';

import {
	MatIconModule,
	MatButtonModule,
	MatInputModule,
	MatTableModule,
	MatListModule,
	MatSelectModule,
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { DownloadComponent } from './components/download/download.component';
import { MapComponent } from './components/map/map.component';
import { MapCardComponent } from './components/map-card/map-card.component';
import { environment } from '../environments/environment';

const socketIoConfig: SocketIoConfig = {
	url: environment.apiBaseUrl,
	options: { path: environment.socketIoPath },
};

@NgModule({
	declarations: [
		AppComponent,
		StatusComponent,
		HomeComponent,
		Q3nameDirective,
		DownloadComponent,
		MapComponent,
		MapCardComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		AppRoutingModule,
		MatListModule,
		HttpClientModule,
		MatTableModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		SocketIoModule.forRoot(socketIoConfig),
	],
	providers: [RconService, RconServerInfoValidatorService],
	bootstrap: [AppComponent],
})
export class AppModule {}

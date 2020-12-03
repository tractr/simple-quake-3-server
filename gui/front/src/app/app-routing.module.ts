import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './components/status/status.component';
import { HomeComponent } from './components/home/home.component';
import { DownloadComponent } from './components/download/download.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'status', component: StatusComponent },
	{ path: 'download', component: DownloadComponent },
	{ path: 'map', component: MapComponent },
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

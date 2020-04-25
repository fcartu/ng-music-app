import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent,
  },
  {
    path: ':id/tracks',
    component: TracksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule {}

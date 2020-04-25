import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from './spotify.service';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from '../../shared/shared.module';
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  declarations: [PlaylistsComponent, TracksComponent],
  imports: [
    SharedModule,
    PlaylistsRoutingModule
  ],
  providers: [
    SpotifyService
  ]
})
export class PlaylistsModule { }

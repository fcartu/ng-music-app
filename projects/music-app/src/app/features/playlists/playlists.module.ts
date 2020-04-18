import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from './spotify.service';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    SharedModule,
    PlaylistsRoutingModule
  ],
  providers: [
    SpotifyService
  ]
})
export class PlaylistsModule { }

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Playlist } from './model/playlist';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getUserPlaylists()
      .subscribe(data => this.playlists = data);
  }

}

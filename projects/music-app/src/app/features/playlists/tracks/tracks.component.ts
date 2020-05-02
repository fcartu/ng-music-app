import { Component, OnInit } from '@angular/core';
import { Track } from '../model/track';
import { SpotifyService } from '../spotify.service';
import { Playlist } from '../model/playlist';
import { pipe } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cartu-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  playlist: Playlist;
  tracks: Track[];

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.spotifyService
      .getUserPlaylists()
      .pipe(
        map((data: any) =>
          data.filter((playlist: Playlist) => playlist.id === id)
        )
      )
      .subscribe((data) => (this.playlist = data[0]));

    this.spotifyService
      .getTracksByPlaylist(id)
      .subscribe((data) => (this.tracks = data));
  }
}

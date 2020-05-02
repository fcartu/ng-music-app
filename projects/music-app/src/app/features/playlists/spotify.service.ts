import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from './model/playlist';
import { Track } from './model/track';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getUserPlaylists(): Observable<Playlist[]> {
    return this.http.get('api/playlists/playlists.json').pipe(
      map((data: any) => data.items),
      map((data) => data.map((c: any) => this.convertToPlaylistObject(c)))
    );
  }

  getTracksByPlaylist(id: string): Observable<Track[]> {
    return this.http.get('api/tracks/tracks.json').pipe(
      map((data: any) => data.items),
      map((data) => data.map((c: any) => this.convertToTrackObject(c.track)))
    );
  }

  // Destructuring spotify object to a basic playlist object.
  private convertToPlaylistObject({
    id,
    description,
    name,
    images: [{ url: imageUrl }],
    owner: { display_name: displayName },
    tracks: { total },
  }: any): Playlist {
    return {
      id,
      description,
      name,
      imageUrl,
      owner: { displayName },
      tracks: { total },
    } as Playlist;
  }

  // Destructuring spotify object to a basic track object.
  private convertToTrackObject({
    id,
    album: { id: albumId, name: albumName },
    artists: [{ id: artistId, name: artistName }],
    duration_ms,
    name,
  }: any): Track {
    return {
      id,
      album: { albumId, albumName },
      artist: { artistId, artistName },
      duration_ms,
      name,
    } as Track;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from './model/playlist';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUserPlaylists(): Observable<Playlist[]> {
    return this.http.get('api/playlists/playlists.json')
      .pipe (
        map((data: any) => data.items),
        map(data => data.map((c: any) => this.convertToPlaylistObject(c)))
      );
  }

  // Destructuring spotify object to a basic playlist object.
  private convertToPlaylistObject(
    { id, description, name, images: [{ url: imageUrl }]}: any): Playlist {

    return ({ id, description, name, imageUrl } as Playlist);
  }
}

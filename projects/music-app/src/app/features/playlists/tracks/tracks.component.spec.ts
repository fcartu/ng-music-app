import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksComponent } from './tracks.component';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { Playlist } from '../model/playlist';
import { Track } from '../model/track';

describe('TracksComponent', () => {
  let component: TracksComponent;
  let fixture: ComponentFixture<TracksComponent>;
  let mockSpotifyService: any;
  let mockActivatedRoute: { snapshot: { paramMap: { get: () => string } } };

  const PLAYLISTS: Playlist[] = [
    {
      id: '123',
      name: 'playlist-test',
      description: 'test',
      imageUrl: 'http://bit.ly/a.jpg/',
      owner: { displayName: 'name-test' },
      tracks: { total: 15 },
    },
  ];

  const TRACK: Track = {
    id: '123',
    album: { albumId: '1', albumName: 'test-album' },
    artist: { artistId: '1', artistName: 'test-artist' },
    duration_ms: 2345,
    name: 'song-name',
  };

  beforeEach(async(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };
    mockSpotifyService = jasmine.createSpyObj([
      'getUserPlaylists',
      'getTracksByPlaylist',
    ]);

    TestBed.configureTestingModule({
      declarations: [TracksComponent],
      providers: [
        { provide: SpotifyService, useValue: mockSpotifyService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TracksComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    mockSpotifyService.getUserPlaylists.and.returnValue(of([PLAYLISTS]));
    mockSpotifyService.getTracksByPlaylist.and.returnValue(of(TRACK));
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});

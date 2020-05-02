export interface Track {
  id: string;
  album: {
    albumId: string;
    albumName: string;
  };
  artist: {
    artistId: string;
    artistName: string;
  };
  duration_ms: number;
  name: string;
}

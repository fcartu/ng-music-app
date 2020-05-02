export interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  owner: {
    displayName: string;
  };
  tracks: {
    total: number;
  };
}

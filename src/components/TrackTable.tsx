import { useAllTracksQuery } from '../graphql/generated';
import { TrackItemProps } from './types';

export default function TrackTable() {
  const { data: allTracksData, error, loading } = useAllTracksQuery();

  if (loading) {
    return <div>loading tracks...</div>;
  }

  console.log('all tracks: ', allTracksData);

  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genres</th>
          <th>Host</th>
        </tr>
      </thead>
      <tbody>
        {allTracksData?.all_tracks.map((t, i) => {
          return (
            <TrackTableItem
              key={i}
              artists={t.artists.map(a => a.name)}
              genres={t.genres.map(g => g.name)}
              album={t.album?.title ?? undefined}
              host={t.host}
              remix_artists={t.remix_artists?.map(ra => ra.name)}
              title={t.title}
              track_type={t.track_type}
              url={t.url}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function TrackTableItem({
  title,
  artists,
  album,
  remix_artists,
  track_type,
  host,
  genres,
  url,
}: TrackItemProps) {
  return (
    <tr>
      <td>{title}</td>
      <td>{artists.join(', ')}</td>
      <td>{album}</td>
      <td>{genres.join(', ')}</td>
      <td>{host}</td>
    </tr>
  );
}

import { useAllResourcesQuery } from '../graphql/generated';
import { ResourceItemProps } from './types';

export default function TrackTable() {
  const { data, loading } = useAllResourcesQuery();

  if (loading) {
    return <div>loading resources...</div>;
  }

  console.log('all resources: ', { data });

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
        {/* {data?.all_resources.map((t, i) => {
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
        })} */}
      </tbody>
    </table>
  );
}

function TrackTableItem({
  title,
  artist,
  featured_artist,
  remix_artist,
  resource_type,
  host,
  genres,
  resource_url,
}: ResourceItemProps) {
  return (
    <tr>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{genres.join(', ')}</td>
      <td>{host}</td>
    </tr>
  );
}

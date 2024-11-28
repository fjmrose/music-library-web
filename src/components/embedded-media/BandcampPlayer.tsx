import { ResourceType } from '../../graphql/generated';
import { EmbeddedPlayerProps } from './types';

export const BandcampPlayer = ({
  embeddedId,
  title,
  artist,
  resourceUrl,
  resourceType,
}: EmbeddedPlayerProps) => {
  const type = resourceType === ResourceType.Album ? 'album' : 'track';

  return (
    <iframe
      className='w-full h-[340px]'
      src={`https://bandcamp.com/EmbeddedPlayer/${type}=${embeddedId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/transparent=true/`}
      seamless
    >
      <a href={resourceUrl}>
        {title} by {artist}
      </a>
    </iframe>
  );
};

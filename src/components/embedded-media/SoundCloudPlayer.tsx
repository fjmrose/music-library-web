import { EmbeddedPlayerProps } from './types';

export const SoundCloudPlayer = ({
  embeddedId,
  title,
  resourceUrl,
  description,
}: EmbeddedPlayerProps) => {
  return (
    <>
      <iframe
        width='100%'
        height='300'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embeddedId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
          fontWeight: '100',
          wordBreak: 'normal',
        }}
      >
        <a
          href={resourceUrl}
          title={title}
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          {title}
        </a>
        {' · '}
        {description && (
          <a
            href={resourceUrl}
            title={description}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            {description}
          </a>
        )}
      </div>
    </>
  );
};

export const EmbeddedMedia = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <HostPlayerPreview host='SoundCloud'>
        <EmbeddedPlayerPreview title='Large with artwork'>
          <iframe
            width='100%'
            height='300'
            frameBorder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1821842697&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
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
              href='https://soundcloud.com/dreamsoftwarecorp'
              title='Dream Software'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Dream Software
            </a>
            {' · '}
            <a
              href='https://soundcloud.com/dreamsoftwarecorp/virtual-utopia-09-beltrac-urban-guidance'
              title='Virtual Utopia 09: Beltrac & Urban Guidance'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Virtual Utopia 09: Beltrac & Urban Guidance
            </a>
          </div>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Standard with artwork'>
          <iframe
            width='100%'
            height='166'
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1821842697&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
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
              href='https://soundcloud.com/dreamsoftwarecorp'
              title='Dream Software'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Dream Software
            </a>
            {' · '}
            <a
              href='https://soundcloud.com/dreamsoftwarecorp/virtual-utopia-09-beltrac-urban-guidance'
              title='Virtual Utopia 09: Beltrac & Urban Guidance'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Virtual Utopia 09: Beltrac & Urban Guidance
            </a>
          </div>
        </EmbeddedPlayerPreview>
      </HostPlayerPreview>
      <HostPlayerPreview host='YouTube'>
        <EmbeddedPlayerPreview title='With player controls'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/J_-y7tdkb78?si=wCW8vc8iJgfbGWA0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='No player controls'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/J_-y7tdkb78?si=wCW8vc8iJgfbGWA0&amp;controls=0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </EmbeddedPlayerPreview>
      </HostPlayerPreview>
      <HostPlayerPreview host='Bandcamp'>
        <EmbeddedPlayerPreview title='Slim - No Artwork'>
          <iframe
            className='w-full h-[42px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Slim - With Artwork'>
          <iframe
            className='w-full h-[42px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Artwork Only'>
          <iframe
            className='w-[350px] h-[350px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Standard - No Artwork'>
          <iframe
            className='w-full h-[340px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=none/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Standard - With Small Artwork'>
          <iframe
            className='w-full h-[340px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
        <EmbeddedPlayerPreview title='Standard - With Big Artwork'>
          <iframe
            className='w-[350px] h-[654px]'
            src='https://bandcamp.com/EmbeddedPlayer/album=2531327579/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/'
            seamless
          >
            <a href='https://companion.bandcamp.com/album/osmosis'>
              Osmosis by Space Biology
            </a>
          </iframe>
        </EmbeddedPlayerPreview>
      </HostPlayerPreview>
    </div>
  );
};

interface PlayerPreviewsProps {
  host: string;
  children: any;
}

const HostPlayerPreview = ({ host, children }: PlayerPreviewsProps) => {
  return (
    <div className='flex flex-col space-y-2 border p-2'>
      <div className='flex justify-center bg-blue-300 p-2'>
        <p className='text-lg font-semibold'>{host}</p>
      </div>
      <div className='grid grid-cols-2 place-items-center'>{children}</div>
    </div>
  );
};

interface EmbeddedPlayerPreviewProps {
  title: string;
  children: any;
}

const EmbeddedPlayerPreview = ({
  title,
  children,
}: EmbeddedPlayerPreviewProps) => {
  return (
    <div className='flex flex-col space-y-2 p-4 w-full'>
      {children}
      <p className='text-sm font-semibold'>{title}</p>
    </div>
  );
};

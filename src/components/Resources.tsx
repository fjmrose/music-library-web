import { ResourceType } from '../graphql/generated';
import { BandcampPlayer } from './embedded-media/BandcampPlayer';
import { SoundCloudPlayer } from './embedded-media/SoundCloudPlayer';
import { YouTubePlayer } from './embedded-media/YouTubePlayer';

export const Resources = () => {
  return (
    <div className='flex flex-col space-y-2 p-4 w-full'>
      <div className='flex justify-center bg-blue-300 p-2'>
        <p className='text-lg font-semibold'>Resources</p>
      </div>
      <div className='grid grid-cols-2 place-items-center gap-5'>
        <BandcampPlayer
          embeddedId='1867290836'
          title='kalang'
          artist="Donald's House"
          resourceUrl='https://daisyrecordings.bandcamp.com/track/kalang'
          resourceType={ResourceType.OriginalTrack}
        />
        <YouTubePlayer embeddedId='3Uogi-d0Yc0' />
        <SoundCloudPlayer
          embeddedId='1878043350'
          title='C.K - Deep In The Hive by C.K'
          resourceUrl='https://soundcloud.com/ck_sounds/ck-deep-in-the-hive-1'
          description='The CD comes in a silver metal case. In total 50 copies were made. The CD’s were distributed through Safe Distribution as “pay what you want” and in various (offline) record stores worldwide.'
        />
      </div>
    </div>
  );
};

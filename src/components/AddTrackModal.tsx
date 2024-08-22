import { ChangeEvent, useState } from 'react';
import { GenreSelect } from './GenreSelect';
import Input from './shared/form/input';
import { Modal } from './shared/modal';
import Select, { SelectValue } from './shared/select';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AddTrackModal = ({ open, onClose }: Props) => {
  const [trackName, setTrackName] = useState<string>('');
  const [artistOne, setArtistOne] = useState<string>('');
  const [artistTwo, setArtistTwo] = useState<string>('');
  const [artistThree, setArtistThree] = useState<string>('');
  const [remixArtists, setRemixArtists] = useState<string[]>([]);
  const [album, setAlbum] = useState<string>('');
  const [trackType, setTrackType] = useState<SelectValue | null>(null);
  const [genreOne, setGenreOne] = useState<SelectValue | null>(null);
  const [genreTwo, setGenreTwo] = useState<SelectValue | null>(null);
  const [genreThree, setGenreThree] = useState<SelectValue | null>(null);
  const [url, setUrl] = useState<string>('');

  const onSubmit = () => {};

  const x = [
    {
      label: 'Label One',
      value: 'Value One',
    },
    {
      label: 'Label Two',
      value: 'Value Two',
    },
    {
      label: 'Label Three',
      value: 'Value Three',
    },
  ];

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title='Add Track'
      className='p-3 w-1/3 overflow-visible'
      titleClassName='font-bold'
    >
      <form
        onSubmit={onSubmit}
        className='flex flex-col space-y-2 text-left p-2'
      >
        <Input
          value={trackName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTrackName(e.target.value)
          }
          label='Track Name'
          name='track-name'
          required
          labelClassName='font-semibold'
          className='h-8'
        />
        <div className='flex flex-col'>
          <div className='text-sm font-semibold'>Artists</div>
          <div className='flex flex-row space-x-2'>
            <Input
              value={artistOne}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setArtistOne(e.target.value)
              }
              name='artist-one'
              required
              className='w-1/3 h-8'
            />
            <Input
              value={artistTwo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setArtistTwo(e.target.value)
              }
              name='artist-two'
              className='w-1/3 h-8'
              disabled={!Boolean(artistOne)}
            />
            <Input
              value={artistThree}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setArtistThree(e.target.value)
              }
              name='artist-three'
              className='w-1/3 h-8'
              disabled={!Boolean(artistTwo)}
            />
          </div>
        </div>
        <Input
          value={album}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAlbum(e.target.value)
          }
          label='Album'
          name='album'
          required
          labelClassName='font-semibold'
          className='h-8'
        />
        <Input
          value={url}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value)
          }
          label='URL'
          name='track-url'
          required
          labelClassName='font-semibold'
          className='h-8'
        />
        <div className='flex flex-col space-y-2'>
          <div className='text-sm font-semibold'>Track Type</div>
          <Select
            options={x}
            value={trackType}
            onChange={(val: SelectValue | null) => setTrackType(val)}
            placeholder='Track Type...'
          />
        </div>
        <div className='flex flex-col space-y-2 w-full'>
          <div className='text-sm font-semibold'>Genres</div>
          <GenreSelect
            options={x}
            genreOne={genreOne}
            setGenreOne={setGenreOne}
            genreTwo={genreTwo}
            setGenreTwo={setGenreTwo}
            genreThree={genreThree}
            setGenreThree={setGenreThree}
          />
        </div>
      </form>
    </Modal>
  );
};

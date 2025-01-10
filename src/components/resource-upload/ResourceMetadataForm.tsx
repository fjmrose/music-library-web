import Select, { SelectValue } from '../shared/select';
import { GenreMultiSelect } from './GenreMultiSelect';
import { resourceTypeOptions } from './constants';

interface Props {
  url?: string;
  setUrl: (value?: string) => void;
  resourceType?: SelectValue;
  setResourceType: (value?: SelectValue) => void;
  title?: string;
  setTitle: (value?: string) => void;
  artist?: string;
  setArtist: (value?: string) => void;
  genres: SelectValue[];
  setGenres: (genres: SelectValue[]) => void;
}

export const ResourceMetadataForm = ({
  url,
  setUrl,
  resourceType,
  setResourceType,
  title,
  setTitle,
  artist,
  setArtist,
  genres,
  setGenres,
}: Props) => {
  return (
    <form>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-row items-center space-x-2'>
          <input
            id='url'
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder='Paste URL here...'
            className='py-1 px-2 border rounded-md w-1/2'
          />
        </div>
        <div className='flex flex-row justify-start space-x-3 w-full'>
          <div className='w-1/4'>
            {/* <select
              id='resource-type'
              value={resourceType}
              onChange={e => setResourceType(e.target.value as ResourceType)}
              className='p-2 border rounded-md w-full'
            >
              <option key='placeholder'>Resource Type</option>
              {resourceTypeOptions.map(t => (
                <option key={t}>{t}</option>
              ))}
            </select> */}
            <Select
              options={resourceTypeOptions.map(t => ({ value: t, label: t }))}
              value={resourceType}
              onChange={(selected: SelectValue | null) =>
                setResourceType(selected as SelectValue)
              }
            />
          </div>
          <span className='flex flex-row space-x-2 w-1/4'>
            <input
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Title'
              className='py-1 px-2 border rounded-md w-full'
            />
          </span>
          <span className='flex flex-row space-x-2 w-1/4'>
            <input
              id='artist'
              value={artist}
              onChange={e => setArtist(e.target.value)}
              placeholder='Artist'
              className='py-1 px-2 border rounded-md w-full'
            />
          </span>
        </div>
        <div className='flex flex-row justify-start w-full'>
          <GenreMultiSelect genres={genres} setGenres={setGenres} />
          {/* <MultiSelectTestComponent /> */}
        </div>
      </div>
    </form>
  );
};

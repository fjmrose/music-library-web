import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { useAllGenresQuery, useAllTagsQuery } from '../../graphql/generated';
import Select, { SelectValue } from '../shared/select';
import { MultiSelect } from '../shared/select/MultiSelect';
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
  tags: SelectValue[];
  setTags: (tags: SelectValue[]) => void;
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
  tags,
  setTags,
}: Props) => {
  const { data: genresData, loading: genresLoading } = useAllGenresQuery();
  const { data: tagsData, loading: tagsLoading } = useAllTagsQuery();

  const genreOptions = useMemo<SelectValue[]>(() => {
    const mockOptions: SelectValue[] = [
      { value: 'IDM', label: 'IDM' },
      { value: 'Jazz', label: 'Jazz' },
      { value: 'Deep House', label: 'Deep House' },
      { value: 'Trip Hop', label: 'Trip Hop' },
      { value: 'Alt Rock', label: 'Alt Rock' },
    ];
    const genres = genresData?.all_genres;

    if (!genres || isEmpty(genres)) {
      return mockOptions;
    }

    return genres.map(g => ({ value: g.name, label: g.name }));
  }, [genresData]);

  const tagOptions = useMemo<SelectValue[]>(() => {
    const mockOptions: SelectValue[] = [
      { value: 'Kickon', label: 'Kickon' },
      { value: 'Morning', label: 'Morning' },
      { value: 'House Party', label: 'House Party' },
    ];
    const tags = tagsData?.all_tags;

    if (!tags || isEmpty(tags)) {
      return mockOptions;
    }

    return tags.map(t => ({ value: t.name, label: t.name }));
  }, [tagsData]);

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
          <MultiSelect
            options={genreOptions}
            selected={genres}
            setSelected={setGenres}
            placeholder='Select or enter genres...'
          />
        </div>
        <div className='flex flex-row justify-start w-full'>
          <MultiSelect
            options={tagOptions}
            selected={tags}
            setSelected={setTags}
            placeholder='Select or enter tags...'
          />
        </div>
      </div>
    </form>
  );
};

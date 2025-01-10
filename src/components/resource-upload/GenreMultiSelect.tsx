import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useAllGenresQuery } from '../../graphql/generated';
import { SelectValue } from '../shared/select';

interface Props {
  genres: SelectValue[];
  setGenres: (genres: SelectValue[]) => void;
}

const mockOptions: SelectValue[] = [
  { value: 'IDM', label: 'IDM' },
  { value: 'Jazz', label: 'Jazz' },
  { value: 'Deep House', label: 'Deep House' },
  { value: 'Trip Hop', label: 'Trip Hop' },
  { value: 'Alt Rock', label: 'Alt Rock' },
];

export const GenreMultiSelect = ({ genres, setGenres }: Props) => {
  const { data, loading } = useAllGenresQuery();

  const genreOptions = useMemo<SelectValue[]>(() => {
    const genres = data?.all_genres;

    if (!genres || isEmpty(genres)) {
      return mockOptions;
    }

    return genres.map(g => ({ value: g.name, label: g.name }));
  }, [data]);

  const handleChange = (selected: MultiValue<SelectValue>) => {
    setGenres(selected as SelectValue[]);
  };

  return (
    <CreatableSelect
      isMulti
      options={genreOptions}
      value={genres}
      onChange={handleChange}
      placeholder='Select or add genres...'
      className='w-1/3'
    />
  );
};

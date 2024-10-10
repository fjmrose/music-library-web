import Select, { SelectValue } from './shared/select';

interface Props {
  options: SelectValue[];
  genreOne: SelectValue | null;
  setGenreOne: (value: SelectValue | null) => void;
  genreTwo: SelectValue | null;
  setGenreTwo: (value: SelectValue | null) => void;
  genreThree: SelectValue | null;
  setGenreThree: (value: SelectValue | null) => void;
}

export const GenreSelect = ({
  options,
  genreOne,
  setGenreOne,
  genreTwo,
  setGenreTwo,
  genreThree,
  setGenreThree,
}: Props) => {
  return (
    <div className='flex flex-row justify-between space-x-2'>
      <Select
        options={options}
        value={genreOne}
        onChange={(val: SelectValue | null) => setGenreOne(val)}
        placeholder='Genre One...'
        className='w-full'
      />
      <Select
        options={options}
        value={genreTwo}
        onChange={(val: SelectValue | null) => setGenreTwo(val)}
        placeholder='Genre Two...'
        className='w-full'
      />
      <Select
        options={options}
        value={genreThree}
        onChange={(val: SelectValue | null) => setGenreThree(val)}
        placeholder='Genre Three...'
        className='w-full'
      />
    </div>
  );
};

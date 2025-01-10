import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { SelectValue } from '.';

interface Props {
  options: SelectValue[];
  selected: SelectValue[];
  setSelected: (genres: SelectValue[]) => void;
  placeholder: string;
}

export const MultiSelect = ({
  options,
  selected,
  setSelected,
  placeholder,
}: Props) => {
  const handleChange = (selected: MultiValue<SelectValue>) => {
    setSelected(selected as SelectValue[]);
  };

  return (
    <CreatableSelect
      isMulti
      options={options}
      value={selected}
      onChange={handleChange}
      placeholder={placeholder}
      className='w-1/3'
    />
  );
};

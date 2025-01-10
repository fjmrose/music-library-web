import { intersection, isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { OnChangeValue } from 'react-select';
import Creatable from 'react-select/creatable';

type FilterOption = {
  label: string;
  value: string;
};

type SearchOption = {
  label: string;
  value: string;
  field: string;
};

export const MultiSelectTestComponent = () => {
  let Placeholder = 'Search ';
  const filterOptions: FilterOption[] = [
    {
      label: 'State',
      value: 'state',
    },
    {
      label: 'Pincode',
      value: 'pincode',
    },
    {
      label: 'District',
      value: 'district',
    },
  ];

  const [apply, setApply] = useState(false);

  const [paramsData, setParamsData] = useState<SearchOption[]>([]);

  const [searchOptions, setSearchOptions] = useState<SearchOption[]>([]);

  const onChange = (params: OnChangeValue<SearchOption, true>) => {
    if (isEmpty(paramsData)) {
      setParamsData(params as SearchOption[]);
    } else if (
      disableInput &&
      isEmpty(params) &&
      Placeholder === 'Search Admin'
    ) {
      setParamsData([]);
    } else if (
      disableInput &&
      !isEmpty(params) &&
      Placeholder === 'Search Admin'
    ) {
      return;
    } else {
      setParamsData(params as SearchOption[]);
    }
  };

  const disableInput = paramsData.length === filterOptions.length;

  const onInputChange = (seachKey: string) => {
    if (!seachKey) {
      setSearchOptions([]);
      return;
    } else if (seachKey.length !== 0) {
      const paramsFieldValues = paramsData.map(param => param.field);
      const filterOptionValues = filterOptions.map(option => option.value);

      const commonValues = intersection(paramsFieldValues, filterOptionValues);

      const filteredFilterOptions = filterOptions.filter(
        option => !commonValues.includes(option.value)
      );
      const options = filteredFilterOptions.map(option => {
        return {
          label: `${option.label} : ${seachKey}`,
          value: seachKey,
          field: option.value,
        };
      });

      setSearchOptions(options);
    } else {
      const options = filterOptions.map(option => {
        return {
          label: `${option.label} : ${seachKey}`,
          value: seachKey,
          field: option.value,
        };
      });
      setSearchOptions(options);
    }
  };

  useEffect(() => {
    if (isEmpty(paramsData)) {
      setApply && setApply(!apply);
    }
  }, [paramsData]);
  return (
    <div className='!cursor-pointer'>
      <Creatable
        classNamePrefix='multitag provider_modal'
        options={searchOptions}
        placeholder={Placeholder}
        isMulti
        value={!isEmpty(paramsData) ? paramsData : null}
        className=' w-[350px] maxSm:w-[290px]'
        onChange={onChange}
        onInputChange={onInputChange}
        isClearable
        components={{
          ClearIndicator: () => null,
        }}
      />
    </div>
  );
};

// export const MultiSelectTestComponent = () => {
//   return null;
// };

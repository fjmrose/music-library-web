/* eslint-disable no-nested-ternary */
import ReactSelect, { MenuPlacement } from 'react-select';

export type SelectValue = {
  value: string;
  label: string | undefined;
};

interface SelectProps {
  options: SelectValue[] | undefined;
  value: SelectValue | undefined | null;
  onChange: (val: SelectValue | null) => void;
  placeholder?: string;
  className?: string;
  isSearchable?: boolean;
  compact?: boolean;
  name?: string;
  disabled?: boolean;
  displayValue?: boolean; // display 'value' instead of 'label'
  menuPlacement?: MenuPlacement;
  offColor?: boolean;
  large?: boolean;
  labelClassname?: string;
  backgroundColor?: string;
}

export default function Select(props: SelectProps) {
  const {
    options,
    value,
    onChange,
    placeholder,
    className,
    isSearchable = false,
    name,
    disabled,
    displayValue = true,
    menuPlacement = 'auto',
  } = props;

  return (
    <ReactSelect<SelectValue, false>
      menuPlacement={menuPlacement}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      isSearchable={isSearchable}
      name={name}
      formatOptionLabel={(data, option) => {
        if (option.context === 'value') {
          return (
            <>
              {name && (
                <span
                  className={`${props.labelClassname || 'text-primary-700'}`}
                >
                  {name}
                </span>
              )}{' '}
              {displayValue ? data.value : data.label}
            </>
          );
        }

        return displayValue ? data.value : data.label;
      }}
      isDisabled={disabled}
    />
  );
}

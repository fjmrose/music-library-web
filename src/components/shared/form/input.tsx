import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  name: string;
  error?: string;
  maxLength?: number;
  maxValue?: number;
  minValue?: number;
  className?: string;
  errorClassName?: string;
  labelClassName?: string;
}

export default function Input({
  value,
  onChange,
  placeholder,
  disabled,
  required,
  name,
  label,
  type = 'text',
  error,
  maxLength,
  maxValue,
  minValue,
  className,
  errorClassName,
  labelClassName,
}: InputProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className={cx(
            'block text-sm font-medium text-left',
            error ? 'text-red-500' : 'text-fg-300',
            labelClassName
          )}
        >
          {label}
        </label>
      ) : null}
      <div className={cx('relative rounded-md shadow-sm', { 'mt-1': label })}>
        <input
          type={type}
          name={name}
          id={name}
          className={cx(
            'text-fg-0 block w-full text-base sm:text-md rounded-md bg-transparent hover:border-primary-500 text-black',
            error
              ? 'text-red-500 placeholder-red-400 border-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
              : 'border-bg-300 focus:ring-primary-500 focus:border-primary-500',
            className,
            {
              '!text-fg-400 !bg-bg-100': disabled,
            }
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          max={maxValue}
          min={minValue}
        />
        {error && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <FontAwesomeIcon
              icon={faExclamation}
              className='h-5 w-5 text-red-500'
            />
          </div>
        )}{' '}
      </div>
      {error && (
        <p
          className={cx(
            'pl-[14px] mt-1 mb-2 text-sm text-red-600',
            errorClassName
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}

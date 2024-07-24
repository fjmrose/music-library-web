import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import cx from 'classnames';
import { Fragment, ReactNode } from 'react';

interface Props {
  className?: string;
  onClose: () => void;
  isOpen?: boolean;
  scrollBody?: boolean;
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
  title?: string;
  titleClassName?: string;
  children: ReactNode;
}

export const Modal = ({
  className,
  onClose,
  children,
  isOpen,
  initialFocus,
  title,
  titleClassName,
  scrollBody = true,
}: Props) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-40'
        onClose={() => {}}
        initialFocus={initialFocus}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div
            className='fixed inset-0 bg-bg-400 bg-opacity-75 transition-opacity'
            onMouseUp={onClose}
          />
        </TransitionChild>
        <div className='fixed inset-0 z-40 overflow-y-auto pointer-events-none'>
          <div
            className={cx(
              'flex justify-center',
              !scrollBody
                ? 'items-center h-full'
                : 'min-h-full items-end text-center sm:items-center m-3'
            )}
          >
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel
                className={cx(
                  'pointer-events-auto relative transform rounded-lg bg-bg-0 shadow-xl transition-all',
                  !scrollBody
                    ? 'flex flex-col max-h-[calc(100%-1.5rem)] overflow-y-auto m-3'
                    : 'overflow-hidden',
                  className
                )}
              >
                {title && (
                  <DialogTitle
                    as='h3'
                    className={cx(
                      'flex items-center justify-between text-fg-100',
                      titleClassName
                    )}
                  >
                    <div className='flex-1'>{title}</div>
                    {onClose && (
                      <button
                        type='button'
                        className='hover:bg-bg-200 rounded p-1'
                        onClick={onClose}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    )}
                  </DialogTitle>
                )}
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

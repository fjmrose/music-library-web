interface AddTrackModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
}

export default function AddTrackModal({ modal, setModal }: AddTrackModalProps) {
  return (
    <div className='fixed modal fade z-20 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
      <div className='bg-white h-2/3 w-2/3 md:w-1/2 fixed inset-0 flex flex-col m-auto border border-white rounded-lg'>
        <div className='flex justify-end w-full h-1/4 pt-2 pr-2 pl-sm-6 bg-blue-100'>
          <button
            type='button'
            onClick={() => setModal(!modal)}
            className='bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-hide='defaultModal'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>
      </div>
    </div>
  );
}

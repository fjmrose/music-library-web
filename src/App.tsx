import { useState } from 'react';
import { AddTrackModal } from './components/AddTrackModal';
import TrackTable from './components/TrackTable';

export default function App() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className='p-10'>
      <div className='flex flex-row justify-around'>
        <TrackTable />
        <button
          className='p-2 font-bold border border-gray-800 bg-blue-500'
          onClick={() => setModal(!modal)}
        >
          Add Track
        </button>
        {modal && (
          <AddTrackModal open={modal} onClose={() => setModal(false)} />
        )}
      </div>
    </div>
  );
}

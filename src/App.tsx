import { useState } from 'react';
import { Resources } from './components/Resources';

export default function App() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className='p-10'>
      {/* <div className='flex flex-row justify-around'>
        <TrackTable />
      </div> */}
      <Resources />
    </div>
  );
}

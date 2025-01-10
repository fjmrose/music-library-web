import { Resources } from './components/Resources';
import { ResourceUpload } from './components/resource-upload/ResourceUpload';

export default function App() {
  return (
    <div className='p-10'>
      <ResourceUpload />
      <Resources />
    </div>
  );
}

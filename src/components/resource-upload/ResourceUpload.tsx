import cx from 'classnames';
import { useEffect, useState } from 'react';
import {
  ResourceMetaData,
  ResourceType,
  useAddResourceMutation,
  useGetResourceMetadataLazyQuery,
} from '../../graphql/generated';
import Spinner from '../shared/animation/Spinner';
import { SelectValue } from '../shared/select';
import { ResourceMetadataForm } from './ResourceMetadataForm';
import { resourceTypeOptions } from './constants';

export const ResourceUpload = () => {
  const [url, setUrl] = useState<string>();
  const [resourceType, setResourceType] = useState<SelectValue>();
  const [title, setTitle] = useState<string>();
  const [artist, setArtist] = useState<string>();
  const [genres, setGenres] = useState<SelectValue[]>([]);
  const [tags, setTags] = useState<SelectValue[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const [getResourceMetadata, { loading }] = useGetResourceMetadataLazyQuery();
  const [addResource, { loading: addResourceLoading }] =
    useAddResourceMutation();

  useEffect(() => {
    if (!url) {
      return;
    }

    const getMetadata = async () => {
      const { data } = await getResourceMetadata({
        variables: {
          url,
        },
      });

      if (!data?.get_resource_metadata) {
        console.error('Could not resolve metadata for provided resource');
      }

      const { resource_type, title, artist } =
        data?.get_resource_metadata as ResourceMetaData;

      const inferredResourceType =
        resourceTypeOptions.find(t => t === resource_type) ||
        ResourceType.OriginalTrack;
      setResourceType({
        value: inferredResourceType,
        label: inferredResourceType,
      });
      setTitle(title);
      if (artist) {
        setArtist(artist);
      }
    };

    getMetadata();
  }, [url]);

  const handleAddResource = () => {};

  return (
    <div className='flex flex-col space-y-3 p-3'>
      <ResourceMetadataForm
        url={url}
        setUrl={setUrl}
        resourceType={resourceType}
        setResourceType={setResourceType}
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        genres={genres}
        setGenres={setGenres}
        tags={tags}
        setTags={setTags}
      />
      <div className='flex space-x-2 w-full'>
        <button
          className={cx(
            !url || addResourceLoading
              ? 'bg-gray-300'
              : 'bg-black hover:bg-gray-800',
            'p-2 font-semibold text-white w-1/5 rounded-sm'
          )}
          onClick={handleAddResource}
          disabled={!url || addResourceLoading}
        >
          {addResourceLoading ? (
            <div className='flex justify-center'>
              <Spinner className='text-white w-5' size={2} />
            </div>
          ) : (
            'Add Resource'
          )}
        </button>
        {uploadError && (
          <div className='flex justify-center w-1/5 bg-red-200 text-red-600 p-3 rounded-md'>
            {uploadError}
          </div>
        )}
      </div>
    </div>
  );
};

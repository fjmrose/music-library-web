import { useEffect, useState } from 'react';
import {
  ResourceMetaData,
  ResourceType,
  useGetResourceMetadataLazyQuery,
} from '../../graphql/generated';
import { SelectValue } from '../shared/select';
import { ResourceMetadataForm } from './ResourceMetadataForm';
import { resourceTypeOptions } from './constants';

export const ResourceUpload = () => {
  const [url, setUrl] = useState<string>();
  const [resourceType, setResourceType] = useState<SelectValue>();
  const [title, setTitle] = useState<string>();
  const [artist, setArtist] = useState<string>();
  const [genres, setGenres] = useState<SelectValue[]>([]);

  const [getResourceMetadata, { loading }] = useGetResourceMetadataLazyQuery();

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

  console.log({ genres });

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
      />
    </div>
  );
};

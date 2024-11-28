import { ResourceType } from '../../graphql/generated';

export interface EmbeddedPlayerProps {
  // host: Host;
  embeddedId: string;
  title: string;
  artist?: string;
  resourceUrl: string;
  imageUrl?: string;
  description?: string;
  resourceType?: ResourceType;
}

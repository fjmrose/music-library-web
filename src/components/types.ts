import { Host, ResourceType } from '../graphql/generated';

export interface ResourceItemProps {
  title: string;
  artist: string;
  featured_artist?: string;
  remix_artist?: string;
  resource_type: ResourceType;
  host: Host;
  genres: string[];
  resource_url: string;
}

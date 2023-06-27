import { 
    TrackType,
    Host 
} from '../graphql/generated';

export interface TrackItemProps {
    title: string;
    artists: string[];
    remix_artists?: string[];
    album?: string;
    track_type: TrackType;
    host: Host;
    genres: string[];
    url: string;
}


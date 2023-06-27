import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateScalar: { input: any; output: any; }
};

export type Album = {
  __typename?: 'Album';
  host: Host;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  tracks: Array<Track>;
  url: Scalars['String']['output'];
};

export type AlbumInput = {
  artist: Scalars['String']['input'];
  host: Host;
  title: Scalars['String']['input'];
  tracks: Array<Scalars['String']['input']>;
};

export type Artist = {
  __typename?: 'Artist';
  albums?: Maybe<Array<Album>>;
  id: Scalars['ID']['output'];
  mixes?: Maybe<Array<Mix>>;
  name: Scalars['String']['output'];
  remixes?: Maybe<Array<Track>>;
  tracks?: Maybe<Array<Track>>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tracks: Array<Track>;
};

export enum Host {
  Bandcamp = 'BANDCAMP',
  Other = 'OTHER',
  Soundcloud = 'SOUNDCLOUD',
  Youtube = 'YOUTUBE'
}

export type Mix = {
  __typename?: 'Mix';
  artist: Artist;
  host: Host;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type MixInput = {
  artist: Scalars['String']['input'];
  host?: InputMaybe<Host>;
  image?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  add_album: Album;
  add_mix: Mix;
  add_track: Track;
};


export type MutationAdd_AlbumArgs = {
  input: AlbumInput;
};


export type MutationAdd_MixArgs = {
  input: MixInput;
};


export type MutationAdd_TrackArgs = {
  input: TrackInput;
};

export type Query = {
  __typename?: 'Query';
  all_albums: Array<Album>;
  all_artists: Array<Artist>;
  all_mixes: Array<Mix>;
  all_tracks: Array<Track>;
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists: Array<Artist>;
  created_at?: Maybe<Scalars['DateScalar']['output']>;
  genres: Array<Genre>;
  host: Host;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateScalar']['output']>;
  remix_artists?: Maybe<Array<Artist>>;
  title: Scalars['String']['output'];
  track_type: TrackType;
  url: Scalars['String']['output'];
};

export type TrackInput = {
  album?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<Scalars['String']['input']>>;
  genres: Array<Scalars['String']['input']>;
  host: Host;
  image?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['DateScalar']['input']>;
  remix_artists?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  track_type: TrackType;
  url: Scalars['String']['input'];
};

export enum TrackType {
  Bootleg = 'BOOTLEG',
  ClubMix = 'CLUB_MIX',
  Edit = 'EDIT',
  Original = 'ORIGINAL',
  RadioEdit = 'RADIO_EDIT',
  Remix = 'REMIX'
}

export type AddTrackMutationVariables = Exact<{
  input: TrackInput;
}>;


export type AddTrackMutation = { __typename?: 'Mutation', add_track: { __typename?: 'Track', title: string, track_type: TrackType, artists: Array<{ __typename?: 'Artist', name: string }> } };

export type AllTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTracksQuery = { __typename?: 'Query', all_tracks: Array<{ __typename?: 'Track', created_at?: any | null, host: Host, id: string, image?: string | null, release_date?: any | null, title: string, track_type: TrackType, url: string, album?: { __typename?: 'Album', title: string, url: string } | null, artists: Array<{ __typename?: 'Artist', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, remix_artists?: Array<{ __typename?: 'Artist', name: string }> | null }> };


export const AddTrackDocument = gql`
    mutation AddTrack($input: TrackInput!) {
  add_track(input: $input) {
    title
    track_type
    artists {
      name
    }
  }
}
    `;
export type AddTrackMutationFn = Apollo.MutationFunction<AddTrackMutation, AddTrackMutationVariables>;

/**
 * __useAddTrackMutation__
 *
 * To run a mutation, you first call `useAddTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTrackMutation, { data, loading, error }] = useAddTrackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTrackMutation(baseOptions?: Apollo.MutationHookOptions<AddTrackMutation, AddTrackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTrackMutation, AddTrackMutationVariables>(AddTrackDocument, options);
      }
export type AddTrackMutationHookResult = ReturnType<typeof useAddTrackMutation>;
export type AddTrackMutationResult = Apollo.MutationResult<AddTrackMutation>;
export type AddTrackMutationOptions = Apollo.BaseMutationOptions<AddTrackMutation, AddTrackMutationVariables>;
export const AllTracksDocument = gql`
    query AllTracks {
  all_tracks {
    album {
      title
      url
    }
    artists {
      name
    }
    created_at
    genres {
      name
    }
    host
    id
    image
    release_date
    remix_artists {
      name
    }
    title
    track_type
    url
  }
}
    `;

/**
 * __useAllTracksQuery__
 *
 * To run a query within a React component, call `useAllTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTracksQuery(baseOptions?: Apollo.QueryHookOptions<AllTracksQuery, AllTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTracksQuery, AllTracksQueryVariables>(AllTracksDocument, options);
      }
export function useAllTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTracksQuery, AllTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTracksQuery, AllTracksQueryVariables>(AllTracksDocument, options);
        }
export type AllTracksQueryHookResult = ReturnType<typeof useAllTracksQuery>;
export type AllTracksLazyQueryHookResult = ReturnType<typeof useAllTracksLazyQuery>;
export type AllTracksQueryResult = Apollo.QueryResult<AllTracksQuery, AllTracksQueryVariables>;
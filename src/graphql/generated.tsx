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

export type Artist = {
  __typename?: 'Artist';
  featured_resources?: Maybe<Array<Resource>>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  remixes?: Maybe<Array<Resource>>;
  resources?: Maybe<Array<Resource>>;
};

export type Genre = {
  __typename?: 'Genre';
  artists: Array<Artist>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  resources: Array<Resource>;
};

export enum Host {
  Bandcamp = 'Bandcamp',
  SoundCloud = 'SoundCloud',
  YouTube = 'YouTube'
}

export type Mutation = {
  __typename?: 'Mutation';
  add_resource: Resource;
};


export type MutationAdd_ResourceArgs = {
  input: ResourceInput;
};

export type Query = {
  __typename?: 'Query';
  all_albums: Array<Resource>;
  all_artists: Array<Artist>;
  all_genres: Array<Genre>;
  all_mixes: Array<Resource>;
  all_resources: Array<Resource>;
  all_tags: Array<Tag>;
  get_resource_metadata: ResourceMetaData;
};


export type QueryGet_Resource_MetadataArgs = {
  url: Scalars['String']['input'];
};

export type Resource = {
  __typename?: 'Resource';
  artist: Artist;
  created_at?: Maybe<Scalars['DateScalar']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embedded_id: Scalars['String']['output'];
  featured_artist?: Maybe<Artist>;
  genres: Array<Genre>;
  host: Host;
  id: Scalars['ID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateScalar']['output']>;
  remix_artist?: Maybe<Artist>;
  resource_type: ResourceType;
  resource_url: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
};

export type ResourceInput = {
  artist: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  embedded_id: Scalars['String']['input'];
  featured_artist?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  host: Host;
  image_url?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['DateScalar']['input']>;
  remix_artist?: InputMaybe<Scalars['String']['input']>;
  resource_type: ResourceType;
  resource_url: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagInput>>;
  title: Scalars['String']['input'];
};

export type ResourceMetaData = {
  __typename?: 'ResourceMetaData';
  artist?: Maybe<Scalars['String']['output']>;
  artist_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embedded_id: Scalars['String']['output'];
  host: Host;
  image_url?: Maybe<Scalars['String']['output']>;
  resource_type: ResourceType;
  title: Scalars['String']['output'];
};

export enum ResourceType {
  Album = 'Album',
  Mix = 'Mix',
  OriginalTrack = 'OriginalTrack',
  Remix = 'Remix'
}

export type Tag = {
  __typename?: 'Tag';
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type TagInput = {
  emoji?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type AddResourceMutationVariables = Exact<{
  input: ResourceInput;
}>;


export type AddResourceMutation = { __typename?: 'Mutation', add_resource: { __typename?: 'Resource', id: string, title: string, resource_type: ResourceType, artist: { __typename?: 'Artist', id: string, name: string } } };

export type AllGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGenresQuery = { __typename?: 'Query', all_genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type AllResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllResourcesQuery = { __typename?: 'Query', all_resources: Array<{ __typename?: 'Resource', id: string, created_at?: any | null, title: string, resource_type: ResourceType, resource_url: string, embedded_id: string, image_url?: string | null, description?: string | null, host: Host, artist: { __typename?: 'Artist', id: string, name: string }, featured_artist?: { __typename?: 'Artist', id: string, name: string } | null, remix_artist?: { __typename?: 'Artist', id: string, name: string } | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> }> };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', all_tags: Array<{ __typename?: 'Tag', name: string, emoji?: string | null }> };

export type GetResourceMetadataQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type GetResourceMetadataQuery = { __typename?: 'Query', get_resource_metadata: { __typename?: 'ResourceMetaData', resource_type: ResourceType, host: Host, title: string, artist?: string | null, embedded_id: string, image_url?: string | null, artist_url?: string | null, description?: string | null } };


export const AddResourceDocument = gql`
    mutation AddResource($input: ResourceInput!) {
  add_resource(input: $input) {
    id
    title
    resource_type
    artist {
      id
      name
    }
  }
}
    `;
export type AddResourceMutationFn = Apollo.MutationFunction<AddResourceMutation, AddResourceMutationVariables>;

/**
 * __useAddResourceMutation__
 *
 * To run a mutation, you first call `useAddResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceMutation, { data, loading, error }] = useAddResourceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddResourceMutation(baseOptions?: Apollo.MutationHookOptions<AddResourceMutation, AddResourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddResourceMutation, AddResourceMutationVariables>(AddResourceDocument, options);
      }
export type AddResourceMutationHookResult = ReturnType<typeof useAddResourceMutation>;
export type AddResourceMutationResult = Apollo.MutationResult<AddResourceMutation>;
export type AddResourceMutationOptions = Apollo.BaseMutationOptions<AddResourceMutation, AddResourceMutationVariables>;
export const AllGenresDocument = gql`
    query AllGenres {
  all_genres {
    id
    name
  }
}
    `;

/**
 * __useAllGenresQuery__
 *
 * To run a query within a React component, call `useAllGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGenresQuery(baseOptions?: Apollo.QueryHookOptions<AllGenresQuery, AllGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGenresQuery, AllGenresQueryVariables>(AllGenresDocument, options);
      }
export function useAllGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGenresQuery, AllGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGenresQuery, AllGenresQueryVariables>(AllGenresDocument, options);
        }
export type AllGenresQueryHookResult = ReturnType<typeof useAllGenresQuery>;
export type AllGenresLazyQueryHookResult = ReturnType<typeof useAllGenresLazyQuery>;
export type AllGenresQueryResult = Apollo.QueryResult<AllGenresQuery, AllGenresQueryVariables>;
export const AllResourcesDocument = gql`
    query AllResources {
  all_resources {
    id
    created_at
    title
    artist {
      id
      name
    }
    featured_artist {
      id
      name
    }
    remix_artist {
      id
      name
    }
    resource_type
    resource_url
    embedded_id
    image_url
    description
    host
    genres {
      id
      name
    }
  }
}
    `;

/**
 * __useAllResourcesQuery__
 *
 * To run a query within a React component, call `useAllResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllResourcesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllResourcesQuery(baseOptions?: Apollo.QueryHookOptions<AllResourcesQuery, AllResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllResourcesQuery, AllResourcesQueryVariables>(AllResourcesDocument, options);
      }
export function useAllResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllResourcesQuery, AllResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllResourcesQuery, AllResourcesQueryVariables>(AllResourcesDocument, options);
        }
export type AllResourcesQueryHookResult = ReturnType<typeof useAllResourcesQuery>;
export type AllResourcesLazyQueryHookResult = ReturnType<typeof useAllResourcesLazyQuery>;
export type AllResourcesQueryResult = Apollo.QueryResult<AllResourcesQuery, AllResourcesQueryVariables>;
export const AllTagsDocument = gql`
    query AllTags {
  all_tags {
    name
    emoji
  }
}
    `;

/**
 * __useAllTagsQuery__
 *
 * To run a query within a React component, call `useAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, options);
      }
export function useAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, options);
        }
export type AllTagsQueryHookResult = ReturnType<typeof useAllTagsQuery>;
export type AllTagsLazyQueryHookResult = ReturnType<typeof useAllTagsLazyQuery>;
export type AllTagsQueryResult = Apollo.QueryResult<AllTagsQuery, AllTagsQueryVariables>;
export const GetResourceMetadataDocument = gql`
    query GetResourceMetadata($url: String!) {
  get_resource_metadata(url: $url) {
    resource_type
    host
    title
    artist
    embedded_id
    image_url
    artist_url
    description
  }
}
    `;

/**
 * __useGetResourceMetadataQuery__
 *
 * To run a query within a React component, call `useGetResourceMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceMetadataQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetResourceMetadataQuery(baseOptions: Apollo.QueryHookOptions<GetResourceMetadataQuery, GetResourceMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResourceMetadataQuery, GetResourceMetadataQueryVariables>(GetResourceMetadataDocument, options);
      }
export function useGetResourceMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResourceMetadataQuery, GetResourceMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResourceMetadataQuery, GetResourceMetadataQueryVariables>(GetResourceMetadataDocument, options);
        }
export type GetResourceMetadataQueryHookResult = ReturnType<typeof useGetResourceMetadataQuery>;
export type GetResourceMetadataLazyQueryHookResult = ReturnType<typeof useGetResourceMetadataLazyQuery>;
export type GetResourceMetadataQueryResult = Apollo.QueryResult<GetResourceMetadataQuery, GetResourceMetadataQueryVariables>;
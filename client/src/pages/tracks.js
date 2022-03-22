import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { QueryResult } from "../components";

const TRACKS = gql`
  query TracksForHome {
    tracksForHome {
      id
      title
      author {
        photo
        name
        id
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <QueryResult error={error} data={data} loading={loading} >
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>]
    </QueryResult>
  );
};

export default Tracks;

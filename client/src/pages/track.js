import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACKS = gql`
  query Track($trackId: ID!) {
    track(id: $trackId) {
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
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACKS, {
    variables: {
      trackId,
    },
  });
  return (
    <Layout>
      <QueryResult error={error} data={data} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;

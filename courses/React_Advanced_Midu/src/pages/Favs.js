import React from "react";
import { Layout } from "../components/Layout";
import { ListOfFavs } from "../components/ListOfFavs";
import { useGetFavs } from "../services/useGetFavs";

export default () => {
  const { loading, error, data } = useGetFavs();

  if (error) {
    return <h3>Internal Server Error</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Layout title="Your favorites" subtitle="Find your favorite photos here.">
      <ul>
        <ListOfFavs favs={data.favs} />
      </ul>
    </Layout>
  );
};

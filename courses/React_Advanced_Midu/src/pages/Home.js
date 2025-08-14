import React from "react";
import { Layout } from "../components/Layout";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

const HomePage = ({ id }) => {
  return (
    <Layout
      title="Your pet photos app"
      subtitle="Find photos of pretty pets at Petgram."
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});

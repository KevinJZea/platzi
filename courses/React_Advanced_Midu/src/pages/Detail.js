import React from "react";
import { Layout } from "../components/Layout";
import { PhotoCardWithQuery } from "../components/PhotoCardWithQuery";

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Photo ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};

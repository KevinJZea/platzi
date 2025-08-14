import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetSinglePhoto } from "../../services/useGetSinglePhoto";

export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading } = useGetSinglePhoto(id);

  if (loading) return <p>Loading...</p>;

  const { photo = {} } = data;

  return <PhotoCard {...photo} />;
};

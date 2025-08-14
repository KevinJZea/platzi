import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "../../services/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) {
    return <h3>Internal Server Error</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

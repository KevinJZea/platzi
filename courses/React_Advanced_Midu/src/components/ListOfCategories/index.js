import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import data from "../../../api/db.json";

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setCategories(data.categories);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;

      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {renderList()}
          {showFixed && renderList(true)}
        </>
      )}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);

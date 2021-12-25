import React from "react";
import { Routes, Route } from "react-router-dom";
import useQuery from "./useQuery";
import { Home, ItemDetail, ItemSearch } from '../containers';
import { SearchBar } from "../components";

const Router = () => {
  const query = useQuery();
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemSearch search={query.get("search")} />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default Router;

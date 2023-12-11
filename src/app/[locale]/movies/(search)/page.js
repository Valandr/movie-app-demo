import React from "react";
import SearchResults from "./SearchResults";

export default function MoviesPage({ searchParams }) {
  return (
    <>
      {" "}
      <SearchResults searchParams={searchParams} />
    </>
  );
}

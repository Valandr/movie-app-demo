import SearchSidebar from "../../../../components/search-sidebar/SearchSidebar";
import React from "react";
import styles from "./layout.module.scss";
import { GetMovieByPath } from "../../../../utils/movieClient";

export default async function MovieSearchLayout({
  children,
  params: { locale },
}) {
  const { genres } = await GetMovieByPath("/genre/movie/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
}

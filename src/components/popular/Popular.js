import { GetMovieByPath } from "../../utils/movieClient";
import React from "react";
import MediaCard from "../media-card/MediaCard";
import styles from "./Popular.module.scss";

export default async function Popular({ locale }) {
  const { results } = await GetMovieByPath("/movie/popular", [], locale);
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>Popular</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.key} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
}

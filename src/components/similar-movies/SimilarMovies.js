import { GetMovieByPath } from "../../utils/movieClient";
import React from "react";
import styles from "./SimilarMovies.module.scss";
import MediaCard from "../media-card/MediaCard";

export default async function SimilarMovies({ movieId, locale }) {
  const { results } = await GetMovieByPath(
    `/movie/${movieId}/similar`,
    [],
    locale
  );
  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
}

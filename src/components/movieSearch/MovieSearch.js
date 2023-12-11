"use client";

import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./movieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";

export default function MovieSearch() {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);
  const currentLanguage = useCurrentLanguage();

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };
  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(event) => updateMovieSearch(event.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults
          movieResults={movieResults}
          locale={currentLanguage}
        />
      )}
    </div>
  );
}

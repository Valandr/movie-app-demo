import MovieDetails from "@/components/movie-details/MovieDetails";
import SimilarMovies from "@/components/similar-movies/SimilarMovies";
import { GetMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function MovieIdPage({ params: { id, locale } }) {
  const movie = await GetMovieByPath(`/movie/${id}`, [], locale);
  console.log(movie);
  // if (!movie.original_title) {
  //   return notFound;
  // }
  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
}

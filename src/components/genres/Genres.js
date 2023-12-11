import { GetMovieByPath } from "../../utils/movieClient";
import Link from "next/link";
import React from "react";
import styles from "./Genres.module.scss";
import { getDictionary } from "../../utils/dictionaries";

export default async function Genres({ locale }) {
  const { genres } = await GetMovieByPath("/genre/movie/list", [], locale);

  const i18n = await getDictionary(locale);
  return (
    <div>
      <h2>{i18n.genres.title}</h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/${locale}/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

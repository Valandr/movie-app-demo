import LogoutButton from "@/components/logout-button/LogoutButton";
import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import prisma from "@/utils/prisma";
import MediaCard from "@/components/media-card/MediaCard";
import { getHydratedMovies } from "@/utils/movieClient";
const Profile = async ({ params: { locale } }) => {
  const { user: userSession } = await getServerSession();

  const { movieLikes } = await prisma.user.findFirst({
    where: {
      email: userSession.email,
    },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    movieLikes.map((movie) => movie.movieId)
  );

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        Les films que vous avez aimés.
        <LogoutButton />
      </div>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default Profile;

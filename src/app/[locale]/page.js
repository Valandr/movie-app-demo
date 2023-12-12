import Genres from "@/components/genres/Genres";
import styles from "./page.module.scss";
import Popular from "@/components/popular/Popular";

export const revalidate = 86400;

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}

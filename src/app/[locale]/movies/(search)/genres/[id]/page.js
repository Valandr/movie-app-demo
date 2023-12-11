import SearchResults from "../../SearchResults";

export default function GenreIdPage({ params: { id, locale }, searchParams }) {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
}

import styles from './page.module.css';
import { getCollections } from '../../api/movies';

import { Movie } from '@/types/Movie';
import { MovieComponent } from '@/components/Movie';

interface Collection {
  collectionFictions: Movie[];
}

export default async function Home() {
  const collectionsData = await getCollections();
  const movies = collectionsData?.collections.find(
    (collection: any) => collection.slug === 'movies'
  );

  console.log(collectionsData.collections[0].collectionFictions);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {collectionsData.collections[0].collectionFictions.map(
          (movie: Movie, index: number) => (
            <MovieComponent movie={movie.fiction.movie} key={index} />
          )
        )}
      </main>
    </div>
  );
}

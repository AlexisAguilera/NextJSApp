import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';
import { fetchFavorites } from '@/utils/actions';

async function FavoritesPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const favorites = await fetchFavorites({
    category: searchParams.category,
    search: searchParams.search,
  });

  if (favorites.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favorites} />;
}
export default FavoritesPage;

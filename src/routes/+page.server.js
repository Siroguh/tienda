
import { getAllProducts, getAllCollections } from '$utils/shopify';
import { error } from '@sveltejs/kit';

export async function load() {
  const res = await getAllProducts();
  const res2 = await getAllCollections();

  if (res.status === 200 || res2.status === 200) {
    const allProducts = res.body?.data.products;
    const allCollections = res2.body?.data.collections;

    return {
      body: { allProducts, allCollections }
    };
  }

  throw error(404);
}
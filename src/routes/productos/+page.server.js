import { getAllProducts, getAllCollections, getAllJamones } from '$utils/shopify';
import { error } from '@sveltejs/kit';

export async function load() {
  const res = await getAllProducts();
  const res2 = await getAllCollections();
  const res3 = await getAllJamones();

  if (res.status === 200 || res2.status === 200 || res3.status === 200) {
    const allProducts = res.body?.data.products;
    const allCollections = res2.body?.data.collections;
    const allJamones = res3.body?.data.products;

    return {
      body: { allProducts, allCollections, allJamones }
    };
  }

  throw error(404);
}
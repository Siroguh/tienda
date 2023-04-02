
import { getAllProducts, getAllCollections } from '$utils/shopify';
import { error } from '@sveltejs/kit';

export async function load() {
  const res = await getAllProducts();
  //const res2 = await getAllCollections();

  if (res.status === 200) {
    const allProducts = res.body?.data.products;

    if (allProducts) {
      return {
        body: { allProducts }
      };
    }

    throw error(404)
  }  else {
    throw error(res.status)
  }
  //if (res2.status === 200) {
  //  const products = res2.body?.data?.collections?.edges;
//
  //  if (products) {
  //    return { products };
  //  }
  //  throw error(404);
  //} else {
  //  throw error(res.status);
  //}
}
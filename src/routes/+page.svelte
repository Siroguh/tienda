<script>
  import { fade } from 'svelte/transition';
  import Entero from '$components/products/entero/Entero.svelte';
  import OnLoad from '$components/tech/OnLoad.svelte';
  export let data;
  $: allProducts = data.body.allProducts.edges;
  $: allCollections = data.body.allCollections.edges;
  //$: console.log(allProducts);
</script>

<main class="w-full max-w-1440px grid px-20px mt-100px" in:fade={{ delay: 500, duration: 500 }}>
  <OnLoad caca="100" vaca="500" loading>
    {#each allCollections as products (products.node.handle)}
      {#if products.node.handle.includes('jamones-enteros')}
        {#each allProducts as product, index (product.node.id)}
          {#if product.node.tags.includes('novedad')}
            {#if product.node.handle.includes('iberico-cebo')}
              <Entero
                href={`/productos/${product.node.handle}`}
                description={product.node.description}
                direction="order-1"
                src={product.node.images.edges[0].node.originalSrc}
                productTitle={product.node.title}
              />
            {/if}
            {#if product.node.handle.includes('duroc')}
              <Entero
                href={`/productos/${product.node.handle}`}
                description={product.node.description}
                direction="order-2"
                src={product.node.images.edges[0].node.originalSrc}
                productTitle={product.node.title}
              />
            {/if}
            {#if product.node.handle.includes('gran-reserva')}
              <Entero
                href={`/productos/${product.node.handle}`}
                description={product.node.description}
                direction="order-3"
                src={product.node.images.edges[0].node.originalSrc}
                productTitle={product.node.title}
              />
            {/if}
            {#if product.node.handle.includes('entero')}
              <Entero
                href={`/productos/${product.node.handle}`}
                description={product.node.description}
                direction="order-4"
                src={product.node.images.edges[0].node.originalSrc}
                productTitle={product.node.title}
              />
            {/if}
          {/if}
        {/each}
      {/if}
    {/each}
  </OnLoad>
</main>

<!--

<div class="grid justify-items-center bg-yellow-500/30 border-yellow-500 border-4 p-2">
          <a href={`/product/${product.node.handle}`} class="w-full h-full">
            <span>{product.node.title}</span>
            <img
              src={product.node.images.edges[0].node.originalSrc}
              alt={product.node.title}
              class="w-48 h-48"
            />
          </a>
        </div>

-->

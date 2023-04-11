<script>
  import Hero from '$components/Hero.svelte';
  import Entero from '$components/products/entero/Entero.svelte';
  import Blog from '$components/Blog.svelte';
  import Charcuteria from '$components/products/charcuteria/Charcuteria.svelte';
  import Otros from '$components/products/otros/Otros.svelte';
  //import OnLoad from '$components/tech/OnLoad.svelte';
  export let data;
  $: allJamones = data.body.allJamones.edges;
  $: allProducts = data.body.allProducts.edges;
  //$: allCollections = data.body.allCollections.edges;
  $: console.log(allJamones);
</script>

<main class="w-full px-20px grid">
  {#each allJamones as jamones (jamones.node.handle)}
    <Entero
      href1={jamones.node.handle}
      href2={`/productos/${jamones.node.handle}`}
      description={jamones.node.description}
      src={jamones.node.images.edges[0].node.originalSrc}
      productTitle={jamones.node.title}
    />
  {/each}
  {#each allCollections as products (products.node.handle)}
    {#if products.node.handle.includes('jamones-enteros')}
      {#each allProducts as product (product.node.id)}
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
</main>

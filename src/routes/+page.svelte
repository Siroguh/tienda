<script>
  import Entero from '$components/products/entero/Entero.svelte';
  export let data;
  $: allJamones = data.body.allJamones.edges;
  //$: allProducts = data.body.allProducts.edges;
  //$: allCollections = data.body.allCollections.edges;
  //$: console.log(allJamones);
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
</main>

<script>
  import Entero from '$components/products/entero/Entero.svelte';
  export let allProducts;
  //$: console.log(allProducts);
</script>

<h2>Charcutería en un click</h2>
<p>
  Descubre en nuestra tienda online productos de charcutería de primera calidad, entregados
  directamente en tu hogar.
</p>

{#each allProducts as products (products.node.handle)}
  {#if products.node.tags.includes('queso')}
    <a href="/" class="relative block">
      <img
        class="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
        src={products.node.images.edges[0].node.originalSrc}
        alt=""
      />
      <span
        class="absolute inset-0 bg-black bg-opacity-50 text-white text-center pt-16 hover:pt-24 transition-all duration-300"
      >
        <h3 class="font-bold text-xl uppercase">Jamon</h3>
      </span>
    </a>
  {/if}
{/each}

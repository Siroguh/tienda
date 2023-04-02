<script>
  export let data;
  $: myItem = data.body.allProducts.edges;
  $: console.log(myItem);
</script>

<div class="bg-blue-900/30">
  <div class="grid grid-flow-col items-center justify-start justify-items-center gap-8 p-4">
    <span class="text-4xl">NOVEDADES -></span>
    {#each myItem as product (product.node.id)}
      {#if product.node.tags.includes('novedad')}
        <div class="grid justify-items-center bg-yellow-500/30 border-yellow-500 border-4 p-2">
          <span>{product.node.title}</span>
          <img
            src={product.node.images.edges[0].node.originalSrc}
            alt={product.node.title}
            class="w-48 h-48"
          />
        </div>
      {/if}
    {:else}
      <p>No products :(</p>
    {/each}
  </div>
</div>

<div>
  <span class="text-4xl"
    >TODOS LOS PRODUCTOS
    <div class="i-mdi:vector-square bg-red-500" /></span
  >
  <div class="grid grid-cols-4 items-center justify-center gap-2">
    {#each myItem as product (product.node.id)}
      <div>
        <a
          href={`/product/${product.node.handle}`}
          class="grid grid-flow-col col-span-1 justify-around items-center border-4 border-red-500 bg-red-500/40 h-40 p-2"
        >
          <h1 class="text-white">{product.node.title}</h1>
          <img
            src={product.node.images.edges[0].node.originalSrc}
            alt={product.node.title}
            class="w-48 max-h-full"
          />
        </a>
      </div>
    {:else}
      <p>No products :(</p>
    {/each}
  </div>
</div>
<!--
<h1 class="text-4xl">FILTRADO DE PRODUCTOS AQUI ABAJO.</h1>
<div class="grid grid-cols-4">
  {#each myItem as product (product.node.id)}
    {#if product.node.collections.edges[0].node.title === 'yeet'}
      <div class="grid grid-rows-1 justify-items-center">
        <span>{product.node.title}</span>
        <img
          src={product.node.images.edges[0].node.originalSrc}
          alt={product.node.title}
          class="w-48 h-48"
        />
      </div>
    {/if}
  {:else}
    <p>No products :(</p>
  {/each}
</div>
-->

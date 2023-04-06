<script>
  export let allProducts;
</script>

{#each allProducts as product (product.node.id)}
  {#if product.node.tags.includes('otros')}
    <div class="mb-40px">
      <div class="relative">
        <img src={product.node.images.edges[0].node.originalSrc} alt={product.node.title} />
        <a
          class="w-fit h-35px mt-10px px-10px absolute bottom-10px right-10px grid grid-flow-col items-center justify-center border-2 border-rojo rounded-full hover:bg-white transition-all duration-500 group"
          href={`/productos/${product.node.handle}`}
        >
          <div class="text-rojo i-mdi-shopping w-25px h-25px" />
          <span class="mt-3px text-negro group-hover:text-rojo transition-all duration-500"
            >Tienda</span
          >
        </a>
      </div>

      <h2 class="leading-loose pt-15px text-7.5 text-negro grid grid-flow-col items-center">
        {product.node.title}
      </h2>
      <p class="text-5.5 text-rojo">{product.node.description}</p>
    </div>
  {/if}
{/each}

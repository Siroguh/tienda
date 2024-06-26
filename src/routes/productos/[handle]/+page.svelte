<script>
  import GridTile from '$components/GridTile.svelte';
  import { getCartItems } from '../../../store.js';

  /** @type {import('./$types').PageData} */
  export let data;

  let selectedOptions = {};
  let cartLoading = false;
  let currentImageIndex = 0;

  $: highlightedImageSrc = data?.body?.product?.images?.edges[currentImageIndex]?.node?.originalSrc;

  data?.body?.product?.options.forEach((option) => {
    selectedOptions = { ...selectedOptions, [option.name]: option.values[0] };
  });

  function changeHighlightedImage(direction) {
    if (direction === 'next') {
      if (currentImageIndex + 1 < data?.body?.product?.images?.edges.length) {
        currentImageIndex = currentImageIndex + 1;
      } else {
        currentImageIndex = 0;
      }
    } else {
      if (currentImageIndex === 0) {
        currentImageIndex = data?.body?.product?.images?.edges.length - 1;
      } else {
        currentImageIndex = currentImageIndex - 1;
      }
    }
  }

  async function addToCart() {
    cartLoading = true;
    let variantId;
    let cartId;

    if (typeof window !== 'undefined') {
      cartId = JSON.parse(localStorage.getItem('cartId'));
    }

    data.body.product.variants.edges.forEach((variant) => {
      let result = variant.node.selectedOptions.every((option) => {
        return selectedOptions[option.name] === option.value;
      });
      if (result) {
        variantId = variant.node.id;
      }
    });

    await fetch('/cart.json', {
      method: 'PATCH',
      body: JSON.stringify({ cartId: cartId, variantId: variantId })
    });
    // Wait for the API to finish before updating cart items
    await getCartItems();

    cartLoading = false;
  }
</script>

<svelte:head>
  <title>{data.body.product.title}</title>
</svelte:head>

<div>
  {#if data.body.product}
    <div class="flex flex-col md:flex-row">
      <div class="md:h-90 md:w-2/3">
        {#key highlightedImageSrc}
          <div class="relative h-4/5 bg-light">
            <GridTile
              title={data.body.product.title}
              price={data.body.product.priceRange.maxVariantPrice.amount}
              currencyCode={data.body.product.priceRange.maxVariantPrice.currencyCode}
              imageSrc={highlightedImageSrc}
            />
            {#if data.body.product?.images?.edges.length > 1}
              <div class="absolute right-0 bottom-0 z-40 p-6 ">
                <button
                  on:click={() => {
                    changeHighlightedImage('back');
                  }}
                  class="border border-b border-t border-l border-black py-4 px-8">leftarrow</button
                >
                <button
                  on:click={() => {
                    changeHighlightedImage('next');
                  }}
                  class="-ml-1 border border-black py-4 px-8">rightarrow</button
                >
              </div>
            {/if}
          </div>
        {/key}
        <div class="flex h-1/5 ">
          {#each data.body.product.images.edges as variant, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              on:click={() => {
                currentImageIndex = i;
              }}
              class="h-full w-1/4 bg-white"
            >
              <GridTile imageSrc={variant.node.originalSrc} removeLabels={true} />
            </div>
          {/each}
        </div>
      </div>
      <div class="h-full p-6 md:w-1/3">
        {#each data.body.product.options as option}
          <div class="mb-8">
            <div class="mb-4 text-sm uppercase tracking-wide">{option.name}</div>
            <div class="flex">
              {#each option.values as value}
                <button
                  on:click={() => {
                    selectedOptions = { ...selectedOptions, [option.name]: value };
                  }}
                  class={`${value.length <= 3 ? 'w-12' : 'px-2'} ${
                    selectedOptions[option.name] === value ? 'opacity-100' : 'opacity-60'
                  } transition duration-300 ease-in-out hover:scale-110 hover:opacity-100 border-white h-12 mr-3 flex items-center justify-center rounded-full border`}
                >
                  {value}
                </button>
              {/each}
            </div>
          </div>
        {/each}
        <p class="text-sm">{data.body.product.description}</p>
        <div class="mt-8 flex items-center justify-between">
          <div class="flex items-center">
            <div class="mr-1">star</div>
            <div class="mr-1">star</div>
            <div class="mr-1">star</div>
            <div class="mr-1">star</div>
            <div class="mr-1 opacity-50">star</div>
          </div>
          <div class="text-sm opacity-50">36 Reviews</div>
        </div>
        <button
          on:click={addToCart}
          class="mt-6 flex w-full items-center justify-center bg-light p-4 text-sm uppercase tracking-wide text-black opacity-90 hover:opacity-100"
        >
          <span>Add To Cart</span>
          {#if cartLoading}
            <div class="lds-ring ml-4">
              <div />
              <div />
              <div />
              <div />
            </div>
          {/if}
        </button>
      </div>
    </div>
    <div class="px-4 py-8">
      <div class="mb-4 text-3xl font-bold">Related Products</div>
      <ul class="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-4">
        {#each data.body.featuredProducts as product, i (product.node.id)}
          <li>
            <div
              class="group relative block aspect-square overflow-hidden border border-white/20 bg-zinc-800/50"
            >
              <GridTile
                removeLabels={true}
                imageSrc={product.node.images.edges[0].node.originalSrc}
                href={`/productos/${product.node.handle}`}
              />
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 2px solid #000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

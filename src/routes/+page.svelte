<script>
  export let data;
  $: allProducts = data.body.allProducts.edges;
  $: allCollections = data.body.allCollections.edges;
  $: console.log(allCollections);

  /*var ordenPersonalizado = [
    'Sofía',
    'Luis',
    'Fernando',
    'Ana',
    'María',
    'Pedro',
    'Juan',
    'Laura',
    'Lucía',
    'Carlos'
  ];

  $: allProducts.node.handle.sort(function (a, b) {
    return ordenPersonalizado.indexOf(a.nombre) - ordenPersonalizado.indexOf(b.nombre);
  });

  $: console.log(allProducts);*/
</script>

{#each allCollections as products (products.node.handle)}
  {#if products.node.handle.includes('jamones-enteros')}
    {#each allProducts as product (product.node.id)}
      {#if product.node.tags.includes('novedad')}
        <!--
        PRODUCTOS AQUI
      -->

        <section class="px-[20px] sm:px-[30px] lg:px-[60px] xl:px-[80px]">
          <div
            class="relative mt-[50px] lg:mt-[180px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:items-center font-canela"
          >
            <div class="overflow-hidden">
              <a
                class="block relative w-full lg:w-[525px] h-[525px] vsm:h-[800px] sm:h-[975px] md:h-[1225px] lg:h-[735px] lg:justify-self-start"
                href="/productos/{product.node.handle}"
              >
                <span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px none; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
                >
                  <img
                    src={product.node.images.edges[0].node.originalSrc}
                    alt={product.node.title}
                    decoding="async"
                    data-nimg="fill"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center top; filter: none; background-size: cover; background-image: none; background-position: center top;"
                    sizes="50vw"
                  />
                </span>
              </a>
            </div>
            <div class="w-full lg:px-[80px] text-red-500">
              <h3 class="relative pt-[15px] lg:pt-0 text-35d text-black">
                <span
                  class="hidden lg:block absolute w-[200px] h-px top-[45%] left-[-215px] bg-black z-40"
                />
                {product.node.title}
              </h3>
              <p class="text-22d leading-relaxed lg:py-4">
                {product.node.description}
              </p>
              <span class="block text-16d pt-[15px] uppercase">Preparados:</span>
              <ul class="w-[200px] grid grid-cols-2 grid-rows-2">
                <li>· Centro</li>
                <li>· Contra</li>
                <li>· Maza</li>
                <li>· Punta</li>
              </ul>
              <a
                class="w-[150px] h-[70px] mt-[20px] grid place-items-center text-15d text-red-500 leading-[70px] uppercase border border-red-500 rounded-50 transition-all hover:bg-red-500 hover:text-white"
                href="/productos/{product.node.handle}">Saber más</a
              >
            </div>
          </div>
        </section>
        <!--
        PRODUCTOS AQUI
      -->
      {/if}
    {:else}
      <p>No products :(</p>
    {/each}
  {/if}
{:else}
  <p>No products :(</p>
{/each}

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

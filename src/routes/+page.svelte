<script>
  export let data;
  $: myItem = data.body.allProducts.edges;
  $: myItem2 = data.body.allCollections.edges;
</script>

<div class="w-full h-670px max-w-1440px m-auto px-60px bg-red-500/20">
  <img
    alt="Medios Centros de Jamón Curado deshuesado"
    src="https://jamonesvillarroya.com/_next/image?url=%2Fimg%2Fcentro_deshuesado_mostrado.png&w=750&q=70"
    class="object-bottom object-cover"
  />
</div>

<!--
<div class="bg-blue-900/30">
  <div class="grid grid-flow-col items-center justify-start justify-items-center gap-8 p-4">
    <span class="text-4xl">NOVEDADES -></span>
    {#each myItem as product (product.node.id)}
      {#if product.node.tags.includes('novedad')}
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
-->

<section class="px-[20px] sm:px-[30px] lg:px-[60px] xl:px-[80px]">
  <div
    class="relative mt-[50px] lg:mt-[180px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:items-center font-canela"
  >
    <div class="overflow-hidden">
      <a
        class="block relative w-full lg:w-[525px] h-[525px] vsm:h-[800px] sm:h-[975px] md:h-[1225px] lg:h-[735px] lg:justify-self-start"
        href="/productos/iberico-cebo"
        ><span
          style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px none; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
          ><img
            alt="Jamón Curado Ibérico de Cebo de Jamones Villarroya"
            src="https://jamonesvillarroya.com/_next/image?url=%2Fimg%2Fiberico_cebo.jpg&w=640&q=50"
          />
        </span></a
      >
    </div>
    <div class="w-full lg:px-[80px] text-rojo">
      <h3 class="relative pt-[15px] lg:pt-0 text-35px text-negro">
        <span
          class="hidden lg:block absolute w-[200px] h-px top-[45%] left-[-215px] bg-negro z-40"
        />Jamón Ibérico de Cebo
      </h3>
      <p class="text-22d leading-relaxed lg:py-4">
        Elaborado con animales de raza ibérica 50% criados en Córdoba. Cada pieza pasa por las manos
        de nuestros maestros jamoneros y se afina en nuestro secadero natural durante dos cálidos
        veranos, reproduciendo las condiciones del clima del sur de España.
      </p>
      <span class="block text-16d pt-[15px] uppercase">Preparados:</span>
      <ul class="w-[200px] grid grid-cols-2 grid-rows-2">
        <li>· Centro</li>
        <li>· Contra</li>
        <li>· Maza</li>
        <li>· Punta</li>
      </ul>
      <a
        class="w-[150px] h-[70px] mt-[20px] grid place-items-center text-15d text-rojo leading-[70px] uppercase border border-rojo rounded-50 transition-all hover:bg-red-500 hover:text-white"
        href="/productos/iberico-cebo">Saber más</a
      >
    </div>
  </div>
</section>

<script>
  import Entero from '$components/products/entero/Entero.svelte';
  export let allProducts;
  //$: console.log(allProducts);
</script>

<div class="px-20px mb-40px">
  <h2>Tu Charcutería en un click</h2>
  <p>
    Descubre en nuestra tienda online productos de charcutería de primera calidad, entregados
    directamente en tu hogar.
  </p>

  <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
    {#each allProducts as products (products.node.handle)}
      {#if products.node.tags.includes('queso')}
        <a href="/" class="relative">
          <img
            class="h-250px object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
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
  </div>
</div>

<section class="bg-gray-100 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-canela font-extrabold tracking-tight text-gray-900 mb-4">
      Ofertas de la semana
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1024/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Queso cheddar</h3>
          <p class="text-gray-700 leading-snug mb-4">
            Aprovecha nuestra oferta de la semana y llévate un delicioso queso cheddar madurado a un
            precio increíble.
          </p>
          <span class="text-red-500 font-bold">-20% DTO.</span>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1031/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Chorizo ibérico</h3>
          <p class="text-gray-700 leading-snug mb-4">
            No te pierdas nuestra oferta en chorizo ibérico de bellota. Disfruta del sabor auténtico
            de la mejor charcutería española.
          </p>
          <span class="text-red-500 font-bold">-30% DTO.</span>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1016/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Salchichón de Vic</h3>
          <p class="text-gray-700 leading-snug mb-4">
            Si eres amante de la charcutería, no puedes dejar pasar nuestra oferta en salchichón de
            Vic, una de las joyas de la gastronomía catalana.
          </p>
          <span class="text-red-500 font-bold">-25% DTO.</span>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1025/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Queso manchego</h3>
          <p class="text-gray-700 leading-snug mb-4">
            Disfruta del auténtico sabor del queso manchego con nuestra oferta especial de esta
            semana. ¡No te lo pierdas!
          </p>
          <span class="text-red-500 font-bold">-15% DTO.</span>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1041/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Fuet casero</h3>
          <p class="text-gray-700 leading-snug mb-4">
            No te pierdas nuestra oferta en fuet casero, elaborado con los mejores ingredientes y
            siguiendo la receta tradicional.
          </p>
          <span class="text-red-500 font-bold">-10% DTO.</span>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="h-48 w-full object-cover" src="https://picsum.photos/id/1043/800/500" alt="" />
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">Lomo embuchado</h3>
          <p class="text-gray-700 leading-snug mb-4">
            ¿Eres fan del lomo embuchado? No puedes dejar pasar nuestra oferta de esta semana. Elige
            entre nuestra selección de lomos embuchados al mejor precio.
          </p>
          <span class="text-red-500 font-bold">-20% DTO.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div>
  ENVÍO GRATIS Envío gratis a partir de 80€ en Zaragoza. <br />Envío gratis a partir de 100€ en
  Península.<br />
  Recogida en tienda gratis + código descuento 5% para próxima compra.
</div>

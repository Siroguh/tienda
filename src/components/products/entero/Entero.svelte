<script>
  import { fade } from 'svelte/transition';

  export let href;
  export let description;
  export let direction;
  export let src;
  export let productTitle;
</script>

<div class="{direction} mb-50px" in:fade={{ delay: 2500, duration: 500 }}>
  <a {href} class="w-full h-full" data-sveltekit-preload-code="viewport">
    <img alt="ye" {src} class="w-inherit h-525px object-cover" />
  </a>
  <div>
    <h2 class="pt-15px font-canela text-8.75 text-negro">{productTitle}</h2>
    <p class="text-rojo font-canela text-5.5">{description}</p>
    <div class="text-rojo font-canela">
      <span class="block text-16px pt-15px uppercase">Preparados:</span>
      <ul class="w-200px grid grid-cols-2 grid-rows-2">
        <li>· Centro</li>
        <li>· Contra</li>
        <li>· Maza</li>
        <li>· Punta</li>
      </ul>
      <a
        {href}
        class="w-[150px] h-[70px] mt-[20px] grid place-items-center text-15d text-rojo leading-[70px] uppercase border border-rojo rounded-50p transition-all hover:bg-rojo hover:text-white"
        data-sveltekit-preload-code="viewport"
      >
        Saber más
      </a>
    </div>
  </div>
</div>

<!--
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
          ><img alt="Jamón Curado Ibérico de Cebo de Jamones Villarroya" {src} /><noscript /></span
        ></a
      >
    </div>
    <div class="w-full lg:px-[80px] text-rojo">
      <h3 class="relative pt-[15px] lg:pt-0 text-35d text-negro">
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
        class="w-[150px] h-[70px] mt-[20px] grid place-items-center text-15d text-rojo leading-[70px] uppercase border border-rojo rounded-50 transition-all hover:bg-rojo hover:text-white"
        href="/productos/iberico-cebo">Saber más</a
      >
    </div>
  </div>
</section>
-->

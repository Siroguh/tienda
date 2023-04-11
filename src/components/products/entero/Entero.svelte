<script>
  import { fade } from 'svelte/transition';

  export let href1;
  export let href2;
  export let description;
  export let direction;
  export let src;
  export let productTitle;
</script>

<div class="{direction} mb-50px" in:fade={{ delay: 300, duration: 500 }}>
  <a href={href2} class="w-full h-full" data-sveltekit-preload-code="viewport">
    <img alt="ye" {src} class="w-inherit h-525px object-cover" />
  </a>
  <div>
    <h2 class="pt-15px font-canela text-8.75 text-negro">{productTitle}</h2>
    <p class="text-rojo font-canela text-5.5">{description}</p>
    <div class="text-rojo font-canela grid grid-cols-2">
      <span class="block text-4 pt-15px uppercase col-span-2">Preparados:</span>
      <ul class="w-200px grid grid-cols-2 grid-rows-2 col-span-2 text-5">
        <li>· Centro</li>
        <li>· Contra</li>
        <li>· Maza</li>
        <li>· Punta</li>
      </ul>
      <a
        href={href1}
        class="w-[150px] h-[70px] mt-[20px] grid col-span-1 place-items-center justify-self-left text-15d text-rojo leading-[70px] uppercase border border-rojo rounded-50p transition-all hover:bg-rojo hover:text-white"
        data-sveltekit-preload-code="viewport"
      >
        Saber más
      </a>
      <a
        href={href2}
        class="w-fit h-50px mt-30px p-3 grid grid-flow-col gap-2 items-center place-items-center justify-self-center uppercase text-white border border-transparent rounded-4 bg-rojo hover:bg-white hover:text-rojo transition-all duration-150 font-sans shadow-inner shadow-red-900/50 hover:shadow-current"
      >
        <span>Cómpralo ya</span>
        <div class="i-tabler-hand-click w-25px h-25px" />
      </a>
    </div>
  </div>
</div>

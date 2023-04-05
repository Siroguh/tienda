<script>
  import { fade } from 'svelte/transition';
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';

  let animate = !$navigating;

  let loaded = false;

  onMount(async () => {
    loaded = true;
  });
  export let caca;
  export let vaca;
  export let loading;
</script>

{#if animate}
  {#if loaded}
    <div in:fade={{ delay: caca, duration: vaca }} class="w-full h-full">
      <slot />
    </div>
  {:else if loading}
    <div class="w-screen h-screen absolute inset-0 grid justify-center items-center">
      <img src="/loading.gif" alt="" />
    </div>
  {/if}
{:else}
  <slot />
{/if}

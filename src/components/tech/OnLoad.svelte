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
</script>

{#if animate}
  {#if loaded}
    <div in:fade={{ delay: caca, duration: vaca }}>
      <slot />
    </div>
  {/if}
{:else}
  <slot />
{/if}

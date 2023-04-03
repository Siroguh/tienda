<script>
  import { cartQuantity } from '../store';
  import SearchBar from '$components/SearchBar.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function openCart() {
    dispatch('openCart', true);
  }
</script>

<div class="flex items-center border-b border-zinc-700 p-4 lg:px-6">
  <SearchBar />

  <button class="relative my-2 mx-4 w-52 border border-white grid grid-flow-col gap-4 items-center">
    CART: {$cartQuantity}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="font-sans text-xs" on:click={openCart}>X click me X</span>
  </button>
</div>

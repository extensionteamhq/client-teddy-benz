<script lang="ts">
  export let handleMenuClose: () => void;
</script>

<button class="place-self-end" on:click={handleMenuClose}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>  
</button>

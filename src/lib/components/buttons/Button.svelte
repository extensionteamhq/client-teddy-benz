<script lang="ts">
  import { cn } from "$lib/utils/helper";
  export let text: string;
  export let className: string = '';
  export let loading:boolean = false;
  export let onClick: () => void;
</script>

<button
  class={cn(
    ``,
    className
  )}
  on:click|preventDefault={onClick}
  {...$$restProps}
>
  { loading ? 'loading' : text}
</button>

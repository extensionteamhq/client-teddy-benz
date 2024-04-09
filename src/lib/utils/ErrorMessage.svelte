<script lang="ts">
    import Danger from "$lib/assets/icons/Danger.svelte";
    import { Helper } from "flowbite-svelte";
    import { cn } from "$lib/utils/helper";
    export let message: string;
  
    // default styles; can be overwritten
    export let iconClassName: string = "w-3.5 h-3.5 p-0 pt-0.5 m-0 mr-0.5 inline-block";
    export let textClassName: string = "p-0 m-0 font-normal text-xs inline-block text-neutral-900 dark:text-neutral-100";
  </script>
  
  <div class="flex absolute my-1.5 leading-4 content-center">
    <Danger className="{cn(``,iconClassName)}" />
    <Helper class={cn(textClassName)}>{message}</Helper>
  </div>
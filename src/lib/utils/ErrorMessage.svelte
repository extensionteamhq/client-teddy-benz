<script lang="ts">
    import Danger from '$lib/assets/icons/Danger.svelte';
    import { Helper } from 'flowbite-svelte';

    export let message: string;

    // Default and override styles as props
    export let containerClassName = 'flex my-1.5 leading-4 content-center';
    export let iconClassName = 'w-3.5 h-3.5 p-0 pt-0.5 m-0 mr-0.5 inline-block';
    export let textClassName = 'p-0 m-0 font-normal text-xs inline-block';

    export let overrideContainerClassName = '';
    export let overrideIconClassName = '';
    export let overrideTextClassName = '';

    // Computed final classes
    $: finalContainerClassName = overrideContainerClassName || containerClassName;
    $: finalIconClassName = overrideIconClassName || iconClassName;
    $: finalTextClassName = overrideTextClassName || textClassName;
</script>

<div class={finalContainerClassName}>
    <Danger className={finalIconClassName} />
    <Helper class={finalTextClassName}>{message}</Helper>
</div>

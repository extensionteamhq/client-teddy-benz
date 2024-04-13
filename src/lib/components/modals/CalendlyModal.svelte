<script lang="ts">
    // @ts-nocheck
    // svelte core
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    // svelte plugins
    import { closeModal } from 'svelte-modals';
    // flowbite plugins
    import { Spinner } from 'flowbite-svelte';
    // node modules

    // local
    let isLoading = writable(true);
    export let isOpen: boolean;

    // This function will be called when the iframe has loaded
    function handleLoad() {
        isLoading.set(false);
    }
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents relative">
            {#if $isLoading}
                <div class="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Spinner color="gray" size="14" />
                </div>
            {/if}

            <!-- Once the content (iframe) is loaded, isLoading is set to false, hiding the spinner -->
            <div
                class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                class:hidden={$isLoading}
                transition:fade|global>
                <!-- Ensure this container takes full height minus any desired margins/padding -->
                <div
                    class="pointer-events-auto relative flex w-full flex-col bg-neutral-100 dark:bg-neutral-900 bg-clip-padding text-neutral-900 dark:text-neutral-100 shadow-4 outline-none h-full">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between py-0 px-4 border-b-2 border-neutral-300 dark:border-neutral-600">
                        <h5 class="text-xl font-medium leading-normal"> Schedule A Time To Meet </h5>
                        <button type="button" class="" aria-label="Close" on:click={closeModal}>
                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <!-- Modal Body with Iframe -->
                    <div class="relative overflow-y-auto h-full">
                        <iframe
                            src="https://calendly.com/brandedsites/30min"
                            title="Book A Meeting - Calendly"
                            frameborder="0"
                            style="width: 100%; height: 100%;"
                            on:load={handleLoad}>
                        </iframe>
                    </div>
                    <!-- Modal Footer -->
                    <div class="flex items-center justify-end py-0 px-4 mt-auto border-t-2 border-neutral-300 dark:border-neutral-600">
                        <button type="button" on:click={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

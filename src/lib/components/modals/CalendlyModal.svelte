<script lang="ts">
    // @ts-nocheck
    // svelte core
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    // svelte plugins
    import { closeModal } from 'svelte-modals';
    // other plugins
    import { Spinner } from 'flowbite-svelte';

    // local
    let isLoading = writable(true);
    export let isOpen: boolean;

    function checkCalendlyLoaded() {
        if (typeof Calendly !== 'undefined') {
            isLoading.set(false);
        } else {
            setTimeout(checkCalendlyLoaded, 500);
        }
    }

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000)); 

        await tick();

        checkCalendlyLoaded();

        if (typeof window !== 'undefined') {
            function handleWindowLoad() {
                checkCalendlyLoaded();
            }

            window.addEventListener('load', handleWindowLoad);
        }
    });

</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents relative">
            <div class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none" transition:fade|global>
                <div class="pointer-events-none relative w-auto transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
                    <div
                        class="pointer-events-auto relative flex w-full flex-col bg-neutral-100 dark:bg-neutral-900 bg-clip-padding text-neutral-900 dark:text-neutral-100 shadow-4 outline-none min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
                        <!-- Dynamically loaded or async-dependent content here -->

                        <!-- Modal header -->
                        <div class="flex flex-shrink-0 items-center justify-between py-0 px-4 min-[0px]:rounded-none w-full max-w-screen-2xl mx-auto">
                            <!-- Modal Title -->
                            <h5 class="font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Let's Meet</h5>
                            <!-- Close Button -->
                            <button type="button" class="" aria-label="Close" transition:fade on:click={closeModal}>
                                <span class="[&>svg]:h-6 [&>svg]:w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <!-- Modal body -->
                        {#if $isLoading}
                            <div class="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <Spinner color="gray" size="14" />
                            </div>
                        {/if}
                        <div class="relative p-4 min-[0px]:overflow-y-auto">
                            <div class="px-6 py-20 pb-0 lg:px-8 max-w-screen-2xl mx-auto">
                                <!-- Calendly inline widget -->
                                <div
                                    class="calendly-inline-widget {$isLoading && 'hidden'}"
                                    data-url="https://calendly.com/brandedsites/30min?hide_gdpr_banner=1&background_color=f5f5f5&text_color=171717&primary_color=171717"
                                    style="min-width:320px;height:700px;">
                                </div>
                                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                                <!-- Calendly inline widget end -->
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div
                            class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end py-0 px-4 min-[0px]:rounded-none w-full max-w-screen-2xl mx-auto">
                            <button type="button" class="" on:click={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

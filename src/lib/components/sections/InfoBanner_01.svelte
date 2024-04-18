<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext, onMount } from 'svelte';
    // flowbite plugins

    // node modules

    // local
    import { layoutConfig } from '$lib/data/layout';
    import { isScroll } from '$lib/store';
    // Access functions from the context

    let showBanner: boolean = false;
    let isFirstRender: boolean = true;

    function onClose() {
        showBanner = false;
    }

    onMount(() => {
        setTimeout(() => {
            showBanner = true;
            isFirstRender = false;
        }, 2000);
    });

</script>

{#if !$isScroll || !showBanner}
    <div
        id="banner"
        tabindex="-1"
        class="w-full text-neutral-100 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-100 px-8 {showBanner
            ? 'slide-down'
            : showBanner === false && !isFirstRender
              ? 'slide-up'
              : 'hidden'}">
        <div class="w-full max-w-screen-2xl m-auto">
            <div class="flex w-full flex-wrap">
                <div class="flex w-full items-center justify-center">
                    <svg class="mr-2 h-auto md:w-6 w-8 hidden md:inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                    <p class="text-sm md:text-base leading-6 p-0 m-0 text-center"
                        >Going to
                        <a
                            href="https://www.squadupsummit.com/"
                            target="_blank"
                            class="font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">SquadUp Summit</a
                        >? Message me on
                        <a
                            href="https://instagram.com/{layoutConfig.site.socialHandle_02}"
                            target="_blank"
                            class="px-0.5 pr-1 py-1 mx-0.5 whitespace-nowrap rounded-md border border-neutral-100 dark:border-neutral-900 text-neutral-900 bg-neutral-100 hover:text-neutral-100 hover:bg-neutral-900 dark:text-neutral-100 dark:bg-neutral-900 dark:hover:text-neutral-900 dark:hover:bg-neutral-100">
                            <span class=" [&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" class="inline-block pb-0.5">
                                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/instagram?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span> Instagram</a> if you would like to connect.</p>
                    <button on:click={onClose} type="button" class="items-center rounded-lg text-sm p-1.5 mx-2">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

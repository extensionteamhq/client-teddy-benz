<script lang="ts">
    // @ts-nocheck
    // svelte core
    import { page } from '$app/stores';
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    import { layoutConfig } from '$lib/data/layout';
    // svelte plugins
    import { closeModal } from 'svelte-modals';
    // flowbite plugins
    import { Spinner } from 'flowbite-svelte';
    // other plugins
    import { qr } from '@svelte-put/qr/svg';
    // node modules

    // local
    let isLoading = writable(true);
    export let isOpen: boolean;

    // This function will be called when the content has loaded
    onMount(async () => {
        // Simulate an async operation, like fetching data
        await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 1/2 second

        // Wait for the next microtask to ensure the DOM is updated
        await tick();

        // Now, set isLoading to false to hide the spinner and show the content
        isLoading.set(false);
    });

    $: protocol = $page.url.protocol;
    $: hostname = $page.url.hostname;
    $: port = $page.url.port;
    $: domain = `${$page.url.protocol}//${$page.url.hostname}${$page.url.port ? `:${$page.url.port}` : ''}`;
    $: fullPath = `${domain}/vcard.vcf`;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents relative">
            {#if $isLoading}
                <div class="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Spinner color="gray" size="14" />
                </div>
            {:else}
                <!-- Content that was loading is now displayed -->
                <div class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none" transition:fade|global>
                    <div
                        class="pointer-events-none relative w-auto transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
                        <div
                            class="pointer-events-auto relative flex w-full flex-col bg-neutral-100 dark:bg-neutral-900 bg-clip-padding text-neutral-900 dark:text-neutral-100 shadow-4 outline-none min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
                            <!-- Dynamically loaded or async-dependent content here -->

                            <!-- Modal header -->
                            <div class="flex flex-shrink-0 items-center justify-between py-0 px-4 min-[0px]:rounded-none w-full max-w-screen-2xl mx-auto">
                                <!-- Modal Title -->
                                <h5 class="font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Let's Connect</h5>
                                <!-- Close Button -->
                                <button type="button" class="" aria-label="Close" transition:fade on:click={closeModal}>
                                    <span class="[&>svg]:h-6 [&>svg]:w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <!-- Modal body -->
                            <div class="relative p-4 min-[0px]:overflow-y-auto max-h-full">
                                <div class="px-6 py-20 pb-0 lg:px-8 max-w-screen-2xl mx-auto">
                                    <div class="flex flex-wrap justify-between gap-4">
                                        <!-- QR Code -->
                                        <div class="mx-auto text-center mt-5 max-w-sm basis-1/2">
                                            <div class="block rounded-lg shadow-lg bg-neutral-50 dark:bg-neutral-700 shadow-neutral-900/30 py-10 pt-2">
                                                <div class="p-6 py-0">
                                                    <h5 class="mt-2 mb-4 text-2xl font-bold tracking-tight leading-tight">My Digital Business Card</h5>
                                                    <a href={fullPath} title={layoutConfig.vCard.alt} download={layoutConfig.vCard.src}>
                                                        <svg
                                                            class="max-full min-w-[293px] mx-auto text-center text-neutral-900 bg-neutral-100 rounded-lg shadow-lg shadow-neutral-900/60"
                                                            use:qr={{
                                                                data: fullPath,
                                                                logo: layoutConfig.logo.src,
                                                                shape: 'circle',
                                                            }} />
                                                    </a>
                                                </div>
                                                <div class="p-6 pb-0">
                                                    <div class="mx-auto max-sm text-center flex justify-center">
                                                        <svg
                                                            class="-rotate-45 h-10"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 512 512"
                                                            ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/share?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" /></svg>
                                                        <div class="my-3 text-xl tracking-tight"><p class="m-0">1: Click or Scan to Download</p></div>
                                                        <svg class="rotate-45 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"
                                                            ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/reply?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                                d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" /></svg>
                                                    </div>
                                                    <div class="mx-auto max-w-xs text-left mt-5">
                                                        <p><b>2:</b> Open the .vcf file.</p>
                                                        <p><b>3:</b> Save it or create a new contact.</p>
                                                        <p><b>4:</b> Share your contact record, or&hellip;</p>
                                                        <p class="mb-0"><b>5:</b> Text message me with your name, email, and a photo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Contact Info -->
                                        <div class="mx-auto text-center mt-5 max-w-sm basis-1/2">
                                            <div class="block rounded-lg shadow-lg bg-neutral-50 dark:bg-neutral-700 shadow-neutral-900/30 py-10 pt-2">
                                                <div class="p-6 py-0">
                                                    <h5 class="mt-2 mb-4 text-2xl font-bold tracking-tight leading-tight">My Contact Info</h5>
                                                    <img
                                                        class="max-full mx-auto text-center text-neutral-900 bg-neutral-100 rounded-lg shadow-lg shadow-neutral-900/60"
                                                        src={layoutConfig.logo.src}
                                                        alt={layoutConfig.site.fullName} />
                                                </div>
                                                <div class="p-6 pb-0">
                                                    <div class="mx-auto max-sm text-center flex justify-center">
                                                        <dl class="px-10 space-y-4 text-base leading-7 text-left">
                                                            <div class="flex gap-x-4">
                                                                <dt class="flex-none">
                                                                    <span class="sr-only">Contact</span>
                                                                    <svg
                                                                        class="h-7 w-6 text-neutral-500"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        aria-hidden="true">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                    </svg>
                                                                </dt>
                                                                <dd>
                                                                    {#if layoutConfig.site.fullName !== ''}
                                                                        {layoutConfig.site.fullName}
                                                                        <br />
                                                                    {/if}
                                                                    {#if layoutConfig.site.orgTitle !== ''}
                                                                        {layoutConfig.site.orgTitle}
                                                                    {/if}
                                                                </dd>
                                                            </div>
                                                            {#if layoutConfig.site.orgName || layoutConfig.site.addStreet1_02 || layoutConfig.site.addStreet2_02 || layoutConfig.site.addCity_02 || layoutConfig.site.addRegion_02 || layoutConfig.site.addPostalCode_02 !== ''}
                                                                <div class="flex gap-x-4">
                                                                    <dt class="flex-none">
                                                                        <span class="sr-only">Address</span>
                                                                        <svg
                                                                            class="h-7 w-6 text-neutral-500"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="1.5"
                                                                            stroke="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                                                        </svg>
                                                                    </dt>
                                                                    <dd>
                                                                        {#if layoutConfig.site.orgName !== ''}
                                                                            {layoutConfig.site.orgName}
                                                                            <br />
                                                                        {/if}
                                                                        {#if layoutConfig.site.addStreet1_02 !== ''}
                                                                            {layoutConfig.site.addStreet1_02}
                                                                        {/if}
                                                                        {#if layoutConfig.site.addStreet2_02 !== ''}
                                                                            {layoutConfig.site.addStreet2_02}
                                                                            <br />
                                                                        {/if}
                                                                        {#if layoutConfig.site.addCity_02 !== ''}
                                                                            {layoutConfig.site.addCity_02}
                                                                        {/if}
                                                                        {#if layoutConfig.site.addCity_02 && layoutConfig.site.addRegion_02 !== ''}
                                                                            , {layoutConfig.site.addRegion_02}
                                                                        {:else}
                                                                            {layoutConfig.site.addRegion_02}
                                                                        {/if}
                                                                        {#if layoutConfig.site.addPostalCode_02 !== ''}
                                                                            {layoutConfig.site.addPostalCode_02}
                                                                        {/if}
                                                                    </dd>
                                                                </div>
                                                            {/if}
                                                            {#if layoutConfig.site.telNumDigits_02 !== ''}
                                                                <div class="flex gap-x-4">
                                                                    <dt class="flex-none">
                                                                        <span class="sr-only">Telephone</span>
                                                                        <svg
                                                                            class="h-7 w-6 text-neutral-500"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="1.5"
                                                                            stroke="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                                        </svg>
                                                                    </dt>
                                                                    <dd>
                                                                        <a class="hover:text-gray-900" href="tel:{layoutConfig.site.telNumDigits_02}">
                                                                            {layoutConfig.site.telNumber_02}
                                                                        </a>
                                                                    </dd>
                                                                </div>
                                                            {/if}
                                                            {#if layoutConfig.site.emailAdd_02 !== ''}
                                                                <div class="flex gap-x-4">
                                                                    <dt class="flex-none">
                                                                        <span class="sr-only">Email</span>
                                                                        <svg
                                                                            class="h-7 w-6 text-neutral-500"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="1.5"
                                                                            stroke="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                                        </svg>
                                                                    </dt>
                                                                    <dd>
                                                                        <a class="hover:text-gray-900" href="mailto:{layoutConfig.site.emailAdd_02}">
                                                                            {layoutConfig.site.emailAdd_02}
                                                                        </a>
                                                                    </dd>
                                                                </div>
                                                            {/if}
                                                            {#if layoutConfig.site.vCardNote !== ''}
                                                                <div class="flex gap-x-4">
                                                                    <dt class="flex-none">
                                                                        <span class="sr-only">Note</span>
                                                                        <svg
                                                                            class="h-7 w-6 text-neutral-500"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="1.5"
                                                                            stroke="currentColor"
                                                                            aria-hidden="true">
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                        </svg>
                                                                    </dt>
                                                                    <dd>
                                                                        {layoutConfig.site.vCardNote}
                                                                    </dd>
                                                                </div>
                                                            {/if}
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
            {/if}
        </div>
    </div>
{/if}

<!-- <script context="module">
    export async function load({ page }) {
        const fullPath = `${page.url.origin}/vcard.vcf`;

        return { props: { fullPath } };
    }
</script> -->

<script lang="ts">
    // @ts-nocheck
    // svelte core
    import { page } from '$app/stores';
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    import { layoutConfig } from '../../data/layout';
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
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second

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
                            <div
                                class="flex flex-shrink-0 items-center justify-between border-b-2 border-neutral-300 py-0 px-4 dark:border-neutral-600 min-[0px]:rounded-none">
                                <h5 class="font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Let's Connect</h5>
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
                            <div class="relative min-[0px]:overflow-y-auto">
                                <div class="relative isolate">
                                    <div class="mx-auto grid grid-cols-1 lg:grid-cols-2">
                                        <div class="relative px-6 lg:static px-8 py-10">
                                            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg h-screen">
                                                <h2 class="text-3xl font-bold tracking-tight mb-4">My Digital Business Card</h2>
                                                <div class="px-10 my-10 space-y-4 text-base leading-7">
                                                    <a href={fullPath} accesskey="q" title={layoutConfig.vCard.alt} download={layoutConfig.vCard.src}>
                                                        <svg
                                                            class="w-60"
                                                            use:qr={{
                                                                data: fullPath,
                                                                logo: '/images/alex-suprun-ZHvM3XIOHoE-unsplash.webp',
                                                                shape: 'circle',
                                                                errorCorrectionLevel: 'M',
                                                            }} />
                                                    </a>
                                                </div>
                                                <ol class="ml-5 my-2 list-decimal">
                                                    <li>Click or Scan the QR Code.</li>
                                                    <li>Open/View the downloaded file.</li>
                                                    <li>Create or Save it to your address book as a new contact.</li>
                                                    <li>Send me a text with your information.</li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div class="relative px-6 lg:static px-8 py-10 border-l border-neutral-300">
                                            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                                <h2 class="text-3xl font-bold tracking-tight mb-4">My Contact Details</h2>
                                                <dl class="px-10 mt-10 space-y-4 text-base leading-7">
                                                    <div class="flex gap-x-4">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Contact</span>
                                                            <svg
                                                                class="h-7 w-6 text-gray-400"
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
                                                            {layoutConfig.site.fullName}
                                                            <br />
                                                            {layoutConfig.site.orgTitle}
                                                        </dd>
                                                    </div>
                                                    <div class="flex gap-x-4">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Address</span>
                                                            <svg
                                                                class="h-7 w-6 text-gray-400"
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
                                                            {layoutConfig.site.orgName}
                                                            <br />
                                                            {layoutConfig.site.addStreet1_02}
                                                            {layoutConfig.site.addStreet2_02}
                                                            <br />
                                                            {layoutConfig.site.addCity_02}, {layoutConfig.site.addRegion_02}
                                                            {layoutConfig.site.addPostalCode_02}
                                                        </dd>
                                                    </div>
                                                    <div class="flex gap-x-4">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Telephone</span>
                                                            <svg
                                                                class="h-7 w-6 text-gray-400"
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
                                                    <div class="flex gap-x-4">
                                                        <dt class="flex-none">
                                                            <span class="sr-only">Email</span>
                                                            <svg
                                                                class="h-7 w-6 text-gray-400"
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
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal footer -->
                            <div
                                class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end border-t-2 border-neutral-300 py-0 px-4 dark:border-neutral-600 min-[0px]:rounded-none">
                                <button type="button" class="" data-twe-modal-dismiss on:click={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}

<script lang="ts">
    // svelte core
    import { page } from '$app/stores';
    // svelte plugins
    import { getContext } from 'svelte';
    // other plugins and modules
    import { Avatar } from 'flowbite-svelte';
    import { qr } from '@svelte-put/qr/svg';

    // local
    import { layoutConfig } from '$lib/data/layout';

    $: protocol = $page.url.protocol;
    $: hostname = $page.url.hostname;
    $: port = $page.url.port;
    $: domain = `${$page.url.protocol}//${$page.url.hostname}${$page.url.port ? `:${$page.url.port}` : ''}`;
    $: fullPath = `${domain}/vcard.vcf`;
</script>

<section id="vcard" class="placeholder">
    <div class="flex flex-wrap w-full max-w-screen-2xl mx-auto items-center justify-between lg:text-left text-center">
        <div class="my-2 md:my-8 lg:my-16 xl:my-24 px-8 w-full">
            <!-- header -->
            <div class="sm:text-center mt-4 mb-0 lg:mb-4">
                <p class="text-sm font-semibold my-0">Digital Business Card</p>
                <p class="text-base font-semibold mt-1 mb-2">
                    Handcrafted with
                    <span class="mx-auto [&>svg]:h-4 [&>svg]:w-4 text-red-600 inline-block align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/heart?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                    </span>
                    by
                    <a href="https://extension.team/personal-sites" title="Get your own site from Extension Team." target="_blank" class="hover:text-[#ffcb31]">
                        <span class="mx-auto [&>svg]:h-6 [&>svg]:w-auto inline-block align-middle -mt-1 pr-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.5 779.5" xml:space="preserve">
                                <path
                                    fill="#FFCB31"
                                    d="M769.1 154.1c-10.3-14-27.1-22-46.1-22H330.8l-16.5 43.8H723c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H123.1c-35.5 0-71.8 27.5-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l522.3.2c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8l-415-.1c-35.4 0-71.8 27.4-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l338.3.1c3.5 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H16.5L0 647.4h450.9c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-14-27.1-22-46.1-22l-338.4-.1c-3.6 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 40.9-31.8l415 .1c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-13.9-27.1-22-46.1-22l-522.3-.2c-3.5 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 41-31.8h570.4c35.5 0 71.8-27.5 82.8-62.5 6.1-19.3 3.5-38.9-7.2-53.4z">
                                </path>
                            </svg>
                        </span>
                        Extension Team
                    </a>
                </p>
                <div class="flex items-center justify-center my-4">
                    <a
                        download={layoutConfig.vCard.src}
                        href="/vcard.vcf"
                        title="Digital Business Card"
                        type="button"
                        class="self-center block my-auto rounded-md bg-white p-3 mt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 ring-1 ring-current focus:outline-none focus:ring-0">
                        <span class="[&>svg]:h-6 [&>svg]:w-6">
                            <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/download?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                            Save
                        </span>
                    </a>
                </div>
                <div class="bg-primary-300 dark:bg-darker-400 rounded-t-xl p-4 pb-0 mb-0">
                    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight my-0 mt-4 lg:mt-8">
                        {#if layoutConfig.site.nickName != ''}
                            {#if layoutConfig.site.firstName != ''}
                                {layoutConfig.site.firstName}
                            {/if}
                            <span class="font-bold italic">&nbsp;&quot;{layoutConfig.site.nickName}&quot;&nbsp;</span>
                            {#if layoutConfig.site.lastName != ''}
                                {layoutConfig.site.lastName}
                            {/if}
                        {:else if layoutConfig.site.fullName != ''}
                            {layoutConfig.site.fullName}
                        {:else if layoutConfig.site.firstName != ''}
                            {layoutConfig.site.firstName}
                        {:else if layoutConfig.site.siteName != ''}
                            {layoutConfig.site.siteName}
                        {/if}
                    </h1>
                    <p class="text-xl font-semibold leading-7 mt-2 mb-0">
                        {#if layoutConfig.site.orgTitle != ''}
                            {layoutConfig.site.orgTitle}
                        {/if}
                    </p>
                </div>
            </div>
            <!-- main content -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-primary-300 dark:bg-darker-400 rounded-b-xl p-4 mt-0 font-semibold">
                <div>
                    <img
                        class="max-full mx-auto text-center text-neutral-900 bg-neutral-100 rounded-lg shadow-lg shadow-neutral-900/60"
                        src={layoutConfig.logo.src}
                        alt={layoutConfig.site.fullName} />
                </div>
                <div>
                    <div class="mt-2 md:mt-0">
                        <!--  business -->
                        {#if layoutConfig.site.orgName || layoutConfig.site.addStreet1_02 || layoutConfig.site.addStreet2_02 || layoutConfig.site.addCity_02 || layoutConfig.site.addRegion_02 || layoutConfig.site.addPostalCode_02 !== ''}
                            <div class="flex flex-row m-auto max-w-screen-lg sm:max-w-screen-sm mb-8">
                                <div class="basis-1/8 mt-2 mr-0 lg:mr-4">
                                    <span class="[&>svg]:h-10 [&>svg]:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/building?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                                d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-left">
                                    <p class="m-0 leading-7 pl-4 lg:pl-4">
                                        {#if layoutConfig.site.orgName !== ''}
                                            <b>{layoutConfig.site.orgName}</b>
                                        {/if}
                                        {#if layoutConfig.site.addressName_02 !== ''}
                                            <br />
                                            {layoutConfig.site.addressName_02}
                                        {/if}
                                        {#if layoutConfig.site.addStreet1_02 !== ''}
                                            <br />
                                            {layoutConfig.site.addStreet1_02}
                                        {/if}
                                        {#if layoutConfig.site.addStreet2_02 !== ''}
                                            <br />
                                            {layoutConfig.site.addStreet2_02}
                                        {/if}
                                        {#if layoutConfig.site.addCity_02 && layoutConfig.site.addRegion_02 !== ''}
                                            <br />
                                            {layoutConfig.site.addCity_02}, {layoutConfig.site.addRegion_02}
                                        {:else if layoutConfig.site.addCity_02 !== '' && layoutConfig.site.addRegion_02 == ''}
                                            <br />
                                            {layoutConfig.site.addCity_02},
                                        {:else if layoutConfig.site.addCity_02 == '' && layoutConfig.site.addRegion_02 !== ''}
                                            <br />
                                            {layoutConfig.site.addRegion_02}
                                        {/if}
                                        {#if layoutConfig.site.addPostalCode_02 !== ''}
                                            {layoutConfig.site.addPostalCode_02}
                                        {/if}
                                        {#if layoutConfig.site.addCountry_02 !== ''}
                                            {layoutConfig.site.addCountry_02}
                                        {/if}
                                        {#if layoutConfig.site.telNumDigits_02 || layoutConfig.site.telNumber_02 !== ''}
                                            <br />

                                            <a
                                                href="tel:{layoutConfig.site.telNumDigits_02}"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-primary-300 dark:hover:bg-darker-400 focus:outline-none focus:ring-0"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                    ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/phone?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg
                                                >{layoutConfig.site.telNumber_02}</a>
                                        {/if}
                                        {#if layoutConfig.site.emailAdd_02 !== ''}
                                            <br />

                                            <a
                                                href="mailto:{layoutConfig.site.emailAdd_02}"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-primary-300 dark:hover:bg-darker-400 focus:outline-none focus:ring-0"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                    ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/envelope?f=classic&s=regular License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg
                                                >{layoutConfig.site.emailAdd_02}</a>
                                        {/if}
                                        {#if layoutConfig.site.urlAdd_02 !== ''}
                                            <br />

                                            <a
                                                href={layoutConfig.site.urlAdd_02}
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-primary-300 dark:hover:bg-darker-400 focus:outline-none focus:ring-0"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                    ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/earth-americas?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                        d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg
                                                >{layoutConfig.site.urlAdd_02}</a>
                                        {/if}
                                    </p>
                                </div>
                            </div>
                        {/if}
                        <!-- home -->
                        {#if layoutConfig.site.addStreet1_01 || layoutConfig.site.addStreet2_01 || layoutConfig.site.addCity_01 || layoutConfig.site.addRegion_01 || layoutConfig.site.addPostalCode_01 !== ''}
                            <div class="flex flex-row m-auto max-w-screen-lg sm:max-w-screen-sm mb-8">
                                <div class="basis-1/8 mt-2 mr-0 lg:mr-4">
                                    <span class="[&>svg]:h-10 [&>svg]:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/house?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-left">
                                    <p class="m-0 leading-7 pl-5 lg:pl-4">
                                        {#if layoutConfig.site.addressName_01 !== ''}
                                            <b>{layoutConfig.site.addressName_01}</b>
                                        {/if}
                                        {#if layoutConfig.site.addStreet1_01 !== ''}
                                            <br />
                                            {layoutConfig.site.addStreet1_01}
                                        {/if}
                                        {#if layoutConfig.site.addStreet2_01 !== ''}
                                            <br />
                                            {layoutConfig.site.addStreet2_01}
                                        {/if}
                                        {#if layoutConfig.site.addCity_01 && layoutConfig.site.addRegion_01 !== ''}
                                            <br />
                                            {layoutConfig.site.addCity_01}, {layoutConfig.site.addRegion_01}
                                        {:else if layoutConfig.site.addCity_01 !== '' && layoutConfig.site.addRegion_01 == ''}
                                            <br />{layoutConfig.site.addCity_01},
                                        {:else if layoutConfig.site.addCity_01 == '' && layoutConfig.site.addRegion_01 !== ''}
                                            <br />{layoutConfig.site.addRegion_01}
                                        {/if}
                                        {#if layoutConfig.site.addPostalCode_01 !== ''}
                                            {layoutConfig.site.addPostalCode_01}
                                        {/if}
                                        {#if layoutConfig.site.addCountry_01 !== ''}
                                            {layoutConfig.site.addCountry_01}
                                        {/if}
                                        {#if layoutConfig.site.telType_01 !== ''}
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/phone?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                            <a href="tel:{layoutConfig.site.telNumDigits_01}">{layoutConfig.site.telNumber_01}</a>
                                        {/if}
                                        {#if layoutConfig.site.emailAdd_01 !== ''}
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/envelope?f=classic&s=regular License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                                            <a href="mailto:{layoutConfig.site.emailAdd_01}">{layoutConfig.site.emailAdd_01}</a>
                                        {/if}
                                        {#if layoutConfig.site.urlAdd_01 !== ''}
                                            <br />
                                            <a
                                                href={layoutConfig.site.urlAdd_01}
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-primary-300 dark:hover:bg-darker-400 focus:outline-none focus:ring-0"
                                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 w-auto inline pr-1"
                                                    ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/earth-americas?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                        d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg
                                                >{layoutConfig.site.urlAdd_01}</a>
                                        {/if}
                                    </p>
                                </div>
                            </div>
                        {/if}
                        <!--  socials -->
                        {#if layoutConfig.site.socialHandle_01 || layoutConfig.site.socialHandle_02 || layoutConfig.site.socialHandle_03 || layoutConfig.site.socialHandle_04 || layoutConfig.site.socialHandle_05 || layoutConfig.site.socialHandle_06 || layoutConfig.site.socialHandle_07 || layoutConfig.site.socialHandle_08 || layoutConfig.site.socialHandle_09 !== ''}
                            <div class="flex flex-row m-auto max-w-screen-lg sm:max-w-screen-sm mb-8">
                                <div class="basis-1/8 mt-2 mr-0 lg:mr-4">
                                    <span class="[&>svg]:h-10 [&>svg]:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                            ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/user-large?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z" /></svg>
                                    </span>
                                </div>
                                <div class="text-left m-0 leading-7 pl-4 lg:pl-4">
                                    {#if layoutConfig.site.socialHandle_01 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- facebook -->
                                            <a
                                                href="https://facebook.com/{layoutConfig.site.socialHandle_01}"
                                                title="Facebook"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="[&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/facebook-f?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                                        <path
                                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_01}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_02 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- x-twitter -->
                                            <a
                                                href="https://twitter.com/{layoutConfig.site.socialHandle_02}"
                                                title="X-Twitter"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/x-twitter?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                                        <path
                                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_02}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_03 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- linkedin -->
                                            <a
                                                href="https://linkedin.com/in/{layoutConfig.site.socialHandle_03}"
                                                title="LinkedIn"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/linkedin-in?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                                        <path
                                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_03}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_04 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- instagram -->
                                            <a
                                                href="https://instagram.com/{layoutConfig.site.socialHandle_04}"
                                                title="Instagram"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/instagram?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                                        <path
                                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_04}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_05 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- youtube -->
                                            <a
                                                href="https://youtube.com/@{layoutConfig.site.socialHandle_05}"
                                                title="YouTube"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/youtube?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                                        <path
                                                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_05}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_06 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- tiktok -->
                                            <a
                                                href="https://tiktok.com/{layoutConfig.site.socialHandle_06}"
                                                title="TikTok"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/tiktok?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                                        <path
                                                            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                                                    </svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_06}
                                            </a>
                                        </div>
                                    {/if}
                                    {#if layoutConfig.site.socialHandle_07 !== ''}
                                        <div class="flex flex-wrap space-x-2 items-center">
                                            <!-- threads -->
                                            <a
                                                href="https://www.threads.net/@{layoutConfig.site.socialHandle_07}"
                                                title="TikTok"
                                                target="_blank"
                                                type="button"
                                                class="p-1 rounded-lg bg-transparent font-medium leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                                                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                                    <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"
                                                        ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/threads?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                                                            d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
                                                </span>
                                                @{layoutConfig.site.socialHandle_07}
                                            </a>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        {/if}
                        <!-- note -->
                        {#if layoutConfig.site.vCardNote !== ''}
                            <div class="flex flex-row m-auto max-w-screen-lg sm:max-w-screen-sm mb-0">
                                <div class="basis-1/8 mt-2 mr-0 lg:mr-4">
                                    <span class="[&>svg]:h-10 [&>svg]:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/note-sticky?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-left">
                                    <p class="m-0 pl-4 lg:p-0">
                                        {layoutConfig.site.vCardNote}
                                    </p>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
            <!-- footer -->
            <div class="sm:text-center mt-8 lg:mt-0 mb-4">
                <div class="flex items-center justify-center my-4">
                    <a
                        download={layoutConfig.vCard.src}
                        href="/vcard.vcf"
                        title="Digital Business Card"
                        type="button"
                        class="self-center block my-auto rounded-md bg-white p-3 mt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 ring-1 ring-current focus:outline-none focus:ring-0">
                        <span class="[&>svg]:h-6 [&>svg]:w-6">
                            <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/download?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                            Save
                        </span>
                    </a>
                </div>
                <p class="text-sm font-semibold my-0">Digital Business Card</p>
                <p class="text-base font-semibold mt-1 mb-2">
                    Handcrafted with
                    <span class="mx-auto [&>svg]:h-4 [&>svg]:w-4 text-red-600 inline-block align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/heart?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                    </span>
                    by
                    <a href="https://extension.team/personal-sites" title="Get your own site from Extension Team." target="_blank" class="hover:text-[#ffcb31]">
                        <span class="mx-auto [&>svg]:h-6 [&>svg]:w-auto inline-block align-middle -mt-1 pr-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.5 779.5" xml:space="preserve">
                                <path
                                    fill="#FFCB31"
                                    d="M769.1 154.1c-10.3-14-27.1-22-46.1-22H330.8l-16.5 43.8H723c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H123.1c-35.5 0-71.8 27.5-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l522.3.2c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8l-415-.1c-35.4 0-71.8 27.4-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l338.3.1c3.5 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H16.5L0 647.4h450.9c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-14-27.1-22-46.1-22l-338.4-.1c-3.6 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 40.9-31.8l415 .1c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-13.9-27.1-22-46.1-22l-522.3-.2c-3.5 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 41-31.8h570.4c35.5 0 71.8-27.5 82.8-62.5 6.1-19.3 3.5-38.9-7.2-53.4z">
                                </path>
                            </svg>
                        </span>
                        Extension Team
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>

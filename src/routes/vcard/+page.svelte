<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext } from 'svelte';
    // flowbite plugins
    import { Avatar } from 'flowbite-svelte';
    // node modules

    // local
    import { layoutConfig } from '$lib/data/layout';
</script>

<div class="px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7">
        <p class="text-base font-semibold leading-7">My Digital Business Card</p>
        <!-- vcard header -->
        <div class="grid grid-cols-2 grid-rows-1 mb-8 gap-x-10">
            <!-- name, title, company -->
            <div>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {#if layoutConfig.site.titleName != ''}
                        {layoutConfig.site.titleName}
                    {/if}
                    {#if layoutConfig.site.firstName != ''}
                        {layoutConfig.site.firstName}
                    {/if}
                    {#if layoutConfig.site.middleName != ''}
                        {layoutConfig.site.middleName}
                    {/if}
                    {#if layoutConfig.site.lastName != ''}
                        {layoutConfig.site.lastName}
                    {/if}
                    {#if layoutConfig.site.suffixName != ''}
                        {layoutConfig.site.suffixName}
                    {/if}
                </h1>
                {#if layoutConfig.site.nickName != '' || layoutConfig.site.orgTitle != '' || layoutConfig.site.orgName != ''}
                    <p class="mt-1 mb-0">
                        {#if layoutConfig.site.nickName != ''}
                            <span class="font-bold italic">&quot;{layoutConfig.site.nickName}&quot;</span>
                            <br />
                        {/if}
                        {#if layoutConfig.site.orgTitle != ''}
                            {layoutConfig.site.orgTitle}
                            <br />
                        {/if}
                        {#if layoutConfig.site.orgName != ''}
                            {layoutConfig.site.orgName}
                        {/if}
                    </p>
                {/if}
            </div>
            <!-- save -->
            <div class="">
                <div class="flex items-center justify-end">
                    <a
                        href="/vcard.vcf"
                        title="Digital Business Card"
                        type="button"
                        class="self-center block my-auto rounded-md bg-transparent p-3 mt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 ring-1 ring-current focus:outline-none focus:ring-0"
                        data-twe-ripple-init>
                        <span class="[&>svg]:h-10 [&>svg]:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/download?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                            Save
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <!--  business -->
        <div class="grid grid-cols-12 grid-rows-1 mb-8 gap-x-10">
            <div class="flex content-center items-center">
                <span class="[&>svg]:h-10 [&>svg]:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/building?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                    </svg>
                </span>
            </div>
            <div class="col-span-11">
                <p class="m-0">
                    {layoutConfig.site.addStreet1_02}, {layoutConfig.site.addStreet2_02}
                    <br />
                    {layoutConfig.site.addCity_02}, {layoutConfig.site.addRegion_02}
                    {layoutConfig.site.addPostalCode_02}, {layoutConfig.site.addCountry_02}
                    <br />
                    {layoutConfig.site.urlAdd_02}
                    <br />
                    {layoutConfig.site.telNumber_02}
                    <br />
                    {layoutConfig.site.emailAdd_02}
                </p>
            </div>
        </div>
        <!-- home -->
        <div class="grid grid-cols-12 grid-rows-1 mb-8 gap-x-10">
            <div class="flex content-center items-center">
                <span class="[&>svg]:h-10 [&>svg]:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/house?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                </span>
            </div>
            <div class="col-span-11">
                <p class="m-0">
                    {layoutConfig.site.addStreet1_01}, {layoutConfig.site.addStreet2_01}
                    <br />
                    {layoutConfig.site.addCity_01}, {layoutConfig.site.addRegion_01}
                    {layoutConfig.site.addPostalCode_01}, {layoutConfig.site.addCountry_01}
                    <br />
                    {layoutConfig.site.urlAdd_01}
                    <br />
                    {layoutConfig.site.telNumber_01}
                    <br />
                    {layoutConfig.site.emailAdd_01}
                </p>
            </div>
        </div>
        <!-- note -->
        <div class="grid grid-cols-12 grid-rows-1 mb-8 gap-x-10">
            <div class="flex content-center items-center">
                <span class="[&>svg]:h-10 [&>svg]:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/note-sticky?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z" />
                    </svg>
                </span>
            </div>
            <div class="col-span-11">
                <p class="m-0">
                    {layoutConfig.site.vCardNote}
                </p>
            </div>
        </div>
    </div>
</div>

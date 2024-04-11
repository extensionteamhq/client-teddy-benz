<script lang="ts">
    // svelte core
    import { page } from '$app/stores';
    import { layoutConfig } from '../../data/layout';
    import { goto } from '$app/navigation';
    import { getContext } from 'svelte';
    // svelte plugins

    // flowbite plugins

    // node modules

    // local
    const handleCalendly = getContext<() => void>('handleCalendly');
    const handleContact = getContext<() => void>('handleContact');
    const handleConnect = getContext<() => void>('handleConnect');
    const handleScroll = getContext<(sectionId: string) => void>('handleScroll');

    function handleLinkClick(e: MouseEvent, sectionId: string) {
        handleScroll(sectionId);
    }
</script>

<header class="z-50 absolute top-0 left-0 right-0">
    <!-- Main navigation container -->
    <nav
        class="fixed top-0 flex w-full flex-wrap items-center justify-between shadow-dark-mild text-neutral-900 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-900"
        aria-label="Global">
        <!-- info banner -->
        {#if layoutConfig.infobanner.visible}
            <svelte:component this={layoutConfig.infobanner.component} />
        {/if}
        <!-- navbar -->
        <div class="flex w-full flex-wrap items-center justify-between px-4 py-4">
            <div class="mx-4">
                <a class="my-1 flex items-center lg:my-0" href="/" on:click|preventDefault={(e) => handleLinkClick(e, 'home')}>
                    <img class="rounded-lg w-auto h-8 sm:h-14" src={layoutConfig.logo.src} alt={layoutConfig.logo.alt} loading="lazy" />
                    <span class="self-center text-3xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-50 sr-only">
                        {layoutConfig.site.siteName}
                    </span>
                </a>
            </div>
            <!-- Hamburger button for mobile view -->
            <button class="hamburger" type="button" data-collapse-toggle="navbar-hamburger" aria-controls="navbar-hamburger" aria-expanded="false">
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-8 [&>svg]:stroke-neutral-900 dark:[&>svg]:stroke-neutral-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
            <!-- Collapsible navbar container -->
            <div class="!visible hidden flex-grow basis-[100%] items-center mt-2 lg:mt-0 lg:!flex lg:basis-auto" id="navbar-hamburger">
                <!-- Left links -->
                <ul class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row text-center lg:text-left">
                    <!-- Home link -->
                    <!-- <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                        <a class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400" aria-current="page" href="/" on:click|preventDefault={() => handleScroll('home')}>Home</a>
                    </li> -->
                    <!-- Services Link -->
                    <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                        <a
                            class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400"
                            href="/#services"
                            on:click|preventDefault={(e) => handleLinkClick(e, 'services')}>
                            Services
                        </a>
                    </li>
                    <!-- About Link -->
                    <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                        <a
                            class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400"
                            href="/#about"
                            on:click|preventDefault={(e) => handleLinkClick(e, 'about')}>
                            About
                        </a>
                    </li>
                    <!-- Contact Link -->
                    <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                        <a
                            class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400"
                            href="/#contact"
                            on:click|preventDefault={(e) => handleLinkClick(e, 'contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
                <div class="flex items-center">
                    <button
                        type="button"
                        class="!hidden lg:!inline-flex items-center px-5 py-3 mt-4 mb-8 lg:m-0 lg:mr-4 text-base text-center rounded-lg"
                        on:click={handleConnect}>
                        Let's Connect
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</header>

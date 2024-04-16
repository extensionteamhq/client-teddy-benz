<script lang="ts">
    // svelte core
    import { page } from '$app/stores';
    import { layoutConfig } from '../../data/layout';
    import { goto } from '$app/navigation';
    import { getContext, onMount } from 'svelte';
    import { isScroll } from '$lib/store';
    // svelte plugins

    // other plugins and modules

    // local
    const handleCalendly = getContext<() => void>('handleCalendly');
    const handleContact = getContext<() => void>('handleContact');
    const handleConnect = getContext<() => void>('handleConnect');
    const handleScroll = getContext<(sectionId: string) => void>('handleScroll');

    let clickCount: number = 0;
    let y: number = 0;


    function closeMenuItem() {
        const navbarContainer = document.getElementById('navbar-hamburger');
        const navbarButton = document.querySelector('.hamburger');
        navbarContainer?.classList.add('hidden');
        navbarButton?.setAttribute('aria-expanded', 'false');
        clickCount = 0;
    }

    const handleScrollSite = () => {
        y = window.scrollY; // Update y with the current scroll position
        scrollToTheater(y);
    };

    const scrollToTheater = (scrollPosition: number) => {
        if (scrollPosition > 70) isScroll.set(true)
        else if (scrollPosition < 30) isScroll.set(false)
    };

    function handleLinkClick(e: MouseEvent, sectionId: string) {
        handleScroll(sectionId);
        closeMenuItem();
        clickCount = 0;
    }

    function handleNavMenu() {
        const navbarContainer = document.getElementById('navbar-hamburger');
        const navbarButton = document.querySelector('.hamburger');
        navbarContainer?.classList.remove('hidden');
        navbarButton?.setAttribute('aria-expanded', 'true');
        clickCount++;
        if (clickCount === 2) {
            closeMenuItem();
            clickCount = 0;
        }
    }

    function handleCloseNav() {
        handleConnect();
        closeMenuItem();
    }

    onMount(() => {
        window.addEventListener('scroll', handleScrollSite);
    });

   $: {
    if (y > 70) isScroll.set(true)
        else if (y < 30) isScroll.set(false)
   }

</script>

<svelte:window bind:scrollY="{y}" />
<header class="z-50 sticky top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out">
    <!-- Main navigation container -->
    <nav
        class="fixed top-0 flex w-full flex-wrap items-center justify-between {$isScroll ? `shadow-lg` : ''} shadow-neutral-300 dark:shadow-neutral-600 text-neutral-900 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-900"
        aria-label="Global">
        <!-- info banner -->
        {#if layoutConfig.infobanner.visible}
            <svelte:component this={layoutConfig.infobanner.component} />
        {/if}
       
        <!-- navbar -->
        <div class="w-full max-w-screen-2xl mx-auto {$isScroll ? `py-2`: `py-4`} px-8">
            <div class="flex w-full flex-wrap items-center justify-between">
                <div>
                    <a class="my-1 flex items-center lg:my-0" href="/" on:click|preventDefault={(e) => handleLinkClick(e, 'home')}>
                        <img class="rounded-lg w-auto {$isScroll ? `h-8 sm:h-10`: 'h-8 sm:h-14'}" src={layoutConfig.logo.src} alt={layoutConfig.logo.alt} loading="lazy" />
                        <span class="self-center text-3xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-50 sr-only">
                            {layoutConfig.site.siteName}
                        </span>
                    </a>
                </div>
                <!-- Hamburger button for mobile view -->
                <button
                    on:click={handleNavMenu}
                    class="hamburger"
                    type="button"
                    data-collapse-toggle="navbar-hamburger"
                    aria-controls="navbar-hamburger"
                    aria-expanded="false">
                    <!-- Hamburger icon -->
                    <span class="[&>svg]:w-8 [&>svg]:stroke-neutral-900 dark:[&>svg]:stroke-neutral-100 [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100">
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
                        <li class="my-4 ps-2 lg:my-0  {$isScroll ? 'lg:ps-0' :'lg:ps-2 lg:pe-1'} md:list-item lg:hidden">
                            <a
                                class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400 {$isScroll ? 'text-[14px]' : ' text-[16px]'}"
                                aria-current="page"
                                href="/"
                                on:click|preventDefault={(e) => handleLinkClick(e, 'home')}>
                                Home
                            </a>
                        </li>
                        <!-- Services Link -->
                        <li class="my-4 ps-2 lg:my-0 {$isScroll ? 'lg:ps-0' :'lg:ps-2 lg:pe-1 '}">
                            <a
                                class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400 {$isScroll ? 'text-[14px]' : ' text-[16px]'}"
                                href="/#services"
                                on:click|preventDefault={(e) => handleLinkClick(e, 'services')}>
                                Services
                            </a>
                        </li>
                        <!-- About Link -->
                        <li class="my-4 ps-2 lg:my-0 {$isScroll ? 'lg:ps-0' :'lg:ps-2 lg:pe-1 '}">
                            <a
                                class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400 {$isScroll ? 'text-[14px]' : ' text-[16px]'}"
                                href="/#about"
                                on:click|preventDefault={(e) => handleLinkClick(e, 'about')}>
                                About
                            </a>
                        </li>
                        <!-- Contact Link -->
                        <li class="my-4 ps-2 lg:my-0  {$isScroll ? 'lg:ps-0' :'lg:ps-2 lg:pe-1'}">
                            <a
                                class="lg:px-2 transition duration-200 hover:ease-in-out motion-reduce:transition-none text-neutral-500 dark:text-neutral-50 hover:text-neutral-900 dark:hover:text-neutral-400 focus:text-neutral-900 dark:focus:text-neutral-400 active:text-neutral-900 dark:active-neutral-400 {$isScroll ? 'text-[14px]' : ' text-[16px]'}"
                                href="/#contact"
                                on:click|preventDefault={(e) => handleLinkClick(e, 'contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div class="flex items-center">
                        <button
                            id="letConnect"
                            type="button"
                            class="inline-flex items-center  mt-4 mb-8 lg:m-0 {$isScroll ? `text-[12px] px-3 py-1.5` : `text-base px-5 py-3`} text-center rounded-lg mx-auto"
                            on:click={handleCloseNav}>
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
        </div>
    </nav>
</header>

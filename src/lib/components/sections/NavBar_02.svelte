<script lang="ts">
    // svelte core
    import { page } from '$app/stores';
    import { layoutConfig } from '../../data/layout';
    // svelte plugins

    // flowbite plugins
    import { Avatar, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    // node modules

    // local

    // used for navbar
    $: activeUrl = $page.url.pathname;
    let activeClass = 'font-bold tracking-wide antialiased';
    let nonActiveClass = 'font-normal hover:text-gray-400 tracking-wide antialiased';

    // modals
    export let handleCalendly: () => void;
</script>

<!-- //////////////////////////////////////////////
     WARNING: THIS IS CURRENTLY A WORK IN PROGRESS! 
     //////////////////////////////////////////////-->
<header class="relative px-10">
    <Navbar let:NavContainer class="fixed w-full px-2 sm:px-4 py-0 z-20 top-0 start-0" aria-label="Global">
        <NavContainer class="px-9 sm:px-0 py-2 border-b border-gray-500/20">
            <NavBrand href="/">
                <Avatar src={layoutConfig.logo.src} size="none" class="rounded-lg w-auto me-3 h-8 sm:h-14" alt={layoutConfig.logo.alt} />
                <span class="self-center text-3xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-50 sr-only">{layoutConfig.site.siteName}</span>
            </NavBrand>
            <div class="flex md:order-last">
                <Button
                    class="inline-flex items-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900 hidden md:inline-flex"
                    on:click={handleCalendly}
                    >Let's Connect
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path
                        ></svg>
                </Button>
                <NavHamburger class="md:block lg:hidden" role="dialog" aria-modal="true" />
            </div>
            <NavUl
                {activeUrl}
                {activeClass}
                {nonActiveClass}
                ulClass="flex flex-col p-4 mt-4 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-base sm:font-normal"
                divClass="w-full lg:block lg:w-auto">
                <NavLi href="/">Home</NavLi>
                <NavLi href="/#services">Services</NavLi>
                <NavLi href="/#about">About</NavLi>
                <NavLi href="/">Contact</NavLi>
            </NavUl>
        </NavContainer>
    </Navbar>
</header>

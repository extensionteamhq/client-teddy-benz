<script lang="ts">
    // @ts-nocheck
    import '../app.css';
    // svelte core
    import { page } from '$app/stores';
    import { onMount, setContext } from 'svelte';
    import { fade } from 'svelte/transition';
    import { error } from '@sveltejs/kit';
    // svelte plugins
    import { Modals, closeModal, openModal } from 'svelte-modals';
    // flowbite plugins
    import { DarkMode } from 'flowbite-svelte';
    // node modules
    import Icon from '@iconify/svelte';
    // Component imports
    import { layoutConfig } from '../lib/data/layout';
    import NotFound from '$lib/components/base/NotFound.svelte';
    import Privacy from '$lib/components/base/Privacy.svelte';
    import CalendlyModal from '$lib/components/modals/CalendlyModal.svelte';
    import ContactModal from '$lib/components/modals/ContactModal.svelte';
    import ConnectModal from '$lib/components/modals/ConnectModal.svelte';

    // Function to open Calendly Modal
    function handleCalendly(): void {
        openModal(CalendlyModal, {
            onOpenAnother: () => {
                handleCalendly();
            },
        });
    }

    // Function to open Contact Modal
    function handleContact(): void {
        openModal(ContactModal, {
            onOpenAnother: () => {
                handleContact();
            },
        });
    }

    // Function to open Connect Modal
    function handleConnect(): void {
        openModal(ConnectModal, {
            onOpenAnother: () => {
                handleConnect();
            },
        });
    }

    // Function to scroll to a section by ID
    function handleScroll(sectionId: string): void {
        const section = document.getElementById(sectionId);
        if (section) {
            // Smooth scroll to just above the section
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(document.documentElement).fontSize) * 10;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            // Update the browser's URL without navigating
            //window.history.pushState({}, '', '/' + sectionId);
        }
    }

    // Use setContext to provide these functions to all child components
    setContext('handleCalendly', handleCalendly);
    setContext('handleContact', handleContact);
    setContext('handleConnect', handleConnect);
    setContext('handleScroll', handleScroll);

    // Mapping paths to specific components
    const pathToComponent = {
        '/privacy-policy': Privacy,
        '/privacy': Privacy,
        // Add other specific paths as needed
    };

    // Determine the current component based on the path
    let CurrentComponent = pathToComponent[$page.url.pathname];

    // Determine if it's a 404 scenario
    const isNotFound = $page.error?.message === 'Not Found' && !CurrentComponent;

    // debug
    // console.log($page.error); // Add this line to debug
</script>

{#if CurrentComponent}
    <!-- If there's a CurrentComponent determined by the path, render it -->
    <svelte:component this={CurrentComponent} />
{:else if isNotFound}
    <!-- If there's a 404 error, show the NotFound component -->
    <svelte:component this={NotFound} error={$page.error.message} />
{:else}
    <!-- For all other cases, render the default layout components -->
    <!-- navbar -->
    <svelte:component this={layoutConfig.navbar} {handleConnect} />
    <!-- body -->
    <slot {handleConnect} {handleCalendly} />
    <!-- footer -->
    <svelte:component this={layoutConfig.footer} />
{/if}
<DarkMode
    ariaLabel="Theme Mode"
    class="mode"
    btnClass="rounded-lg text-xs p-2.5 fixed bottom-1 right-1 shadow-none focus:outline-none disabled:focus:outline-none focus:ring-0 disabled:focus:ring-0 focus:ring-transparent dark:focus:ring-transparent text-neutral-900 disabled:text-neutral-900 dark:text-neutral-100 dark:disabled:text-neutral-100 hover:text-neutral-900 disabled:hover:text-neutral-900 dark:hover:text-neutral-100 dark:disabled:hover:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 hover:bg-transparent disabled:hover:bg-transparent dark:hover:bg-transparent dark:disabled:hover:bg-transparent" />
<Modals>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

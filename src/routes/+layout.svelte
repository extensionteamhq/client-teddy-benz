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
    import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';

    let darkMode: boolean = false;

    function toggleDarkMode() {
        darkMode = !darkMode;
    }

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
<!-- <DarkMode
    ariaLabel="Theme Mode"
    class="mode"
    btnClass="rounded-lg text-xs p-2.5 fixed hidden bottom-1 right-1 shadow-none focus:outline-none disabled:focus:outline-none focus:ring-0 disabled:focus:ring-0 focus:ring-transparent dark:focus:ring-transparent text-neutral-900 disabled:text-neutral-900 dark:text-neutral-100 dark:disabled:text-neutral-100 hover:text-neutral-900 disabled:hover:text-neutral-900 dark:hover:text-neutral-100 dark:disabled:hover:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 hover:bg-transparent disabled:hover:bg-transparent dark:hover:bg-transparent dark:disabled:hover:bg-transparent" /> -->
<Modals>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<div class="speed_dial">
    <SpeedDial>
        <!-- Back To Top -->
        <SpeedDialButton
            name="Back To Top"
            on:click={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" {...$$props}>
                <path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z" />
            </svg>
        </SpeedDialButton>

        <!-- Mode -->
        <SpeedDialButton name="Mode" on:click={toggleDarkMode}>
            {#if darkMode}
                <DarkMode btnClass="mode" ariaLabel="Dark Mode" />
            {:else}
                <DarkMode btnClass="mode" ariaLabel="Light Mode" />
            {/if}
            <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
        </SpeedDialButton>

        <!-- Download Card -->
        <SpeedDialButton name="Download Card">
            <a href="/vcard.vcf" title="Digital Business Card" download>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16" {...$$props}>
                    <g fill="currentColor">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </g>
                </svg>
            </a>
        </SpeedDialButton>
    </SpeedDial>
</div>

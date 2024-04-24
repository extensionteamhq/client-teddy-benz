<script lang="ts">
    // @ts-nocheck
    // svelte core

    // svelte plugins

    // other plugins and modules
    import { DarkMode } from 'flowbite-svelte';
    // Component imports
    import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';

    let darkMode: boolean = false;

    function toggleDarkMode() {
        darkMode = !darkMode;
    }
</script>

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

<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext } from 'svelte';
    // flowbite plugins

    // node modules

    // local

    // Access functions from the context
    const handleCalendly = getContext<() => void>('handleCalendly');
    const handleContact = getContext<() => void>('handleContact');
    const handleConnect = getContext<() => void>('handleConnect');
</script>

<section id="benefits" class="py-8 lg:py-16 my-10 text-center relative">
    <div class="w-full max-w-screen-2xl mx-auto py-4 px-8">
        <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl text-darker-300 dark:text-primary"
            >Why Partner With Teddy</h2>
        <p class="sm:text-xl text-center">
            Discover the advantages of partnering with a seasoned real estate professional. Explore how my unique services can elevate your investment strategy
            and streamline your operations for maximum efficiency and profitability.
        </p>
        <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            <div>
                <svg class="mx-auto mb-4 w-12 h-12 text-primary-900 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                    <path
                        d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                <h3 class="mb-2 text-xl font-bold">System Integration</h3>
                <p class="mb-4">Streamline your real estate operations with advanced CRM and data solutions.</p>
            </div>
            <div>
                <svg class="mx-auto mb-4 w-12 h-12 text-primary-900 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd">
                    </path>
                </svg>
                <h3 class="mb-2 text-xl font-bold">Industry Insight</h3>
                <p class="mb-4">Stay ahead of the curve with exclusive and relevant insights, empowering you to seize opportunities as they arise.</p>
            </div>
            <div>
                <svg class="mx-auto mb-4 w-12 h-12 text-primary-900 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd">
                    </path>
                </svg>
                <h3 class="mb-2 text-xl font-bold">Exclusive Deals</h3>
                <p class="mb-4">Gain early access to profitable wholesale opportunities not available on the open market.</p>
            </div>
        </div>
        <div class="text-center w-full">
            <button type="button" class="mt-10 mx-4" on:click={handleConnect}>
                Let's Connect
                <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</section>

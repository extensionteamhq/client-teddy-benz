<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext } from 'svelte';
    // flowbite plugins
    import { Avatar, Button } from 'flowbite-svelte';
    // node modules

    // local
    import { layoutConfig } from '$lib/data/layout';
    // Access functions from the context
    const handleCalendly = getContext<() => void>('handleCalendly');
    const handleContact = getContext<() => void>('handleContact');
    const handleConnect = getContext<() => void>('handleConnect');
    const handleScroll = getContext<(sectionId: string) => void>('handleScroll');
</script>

<section
    id="hero"
    class="flex flex-wrap w-full max-w-screen-2xl mx-auto items-center justify-between lg:text-left text-center mt-20 bg-primary-300 dark:bg-darker-400">
    <div class="">
        <div class="grid gap-8 lg:grid-cols-12 items-center mx-8 my-8 lg:my-24">
            <div class="place-self-center lg:col-span-7">
                <h1 class="mb-4 font-extrabold tracking-tight leading-none text-4xl md:text-5xl xl:text-6xl text-darker-300 dark:text-primary"
                    >Hello. I'm Teddy Benz.</h1>
                <p class="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl"
                    >Are you a Savvy Real Estate Investor? Let's connect, collaborate, and create successful deals together. Partner with me to expand your
                    network and leverage our combined expertise. Reach out today and start transforming real estate opportunities into lucrative ventures. Your
                    next strategic move begins here!</p>
                <button type="button" class="mr-4" on:click={handleConnect}
                    >Let's Connect
                    <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path
                        ></svg>
                </button>
                <button type="button" class="secondary" on:click={() => handleScroll('meet-teddy')}> Meet Teddy </button>
                <div class="mt-10">
                    <span class="bg-primary-200 dark:bg-darker-200 text-gray-500 dark:text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full nowrap"
                        >&#127969;&nbsp;Real Estate Investor</span>
                    <span class="bg-primary-500 dark:bg-darker-500 text-gray-500 dark:text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full nowrap"
                        >&#128295;&nbsp;Integrator</span>
                    <span class="bg-green-300 dark:bg-green-700 text-gray-500 dark:text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full nowrap"
                        >&#128010;&nbsp;Gator</span>
                    <span class="bg-purple-300 dark:bg-purple-700 text-gray-500 dark:text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full nowrap"
                        >&#127991;&nbsp;Wholesaler</span>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex place-self-end">
                <Avatar src={layoutConfig.logo.src} size="none" class="rounded-lg w-max h-auto shadow-lg shadow-neutral-900/80" alt={layoutConfig.logo.alt} />
            </div>
        </div>
    </div>
</section>

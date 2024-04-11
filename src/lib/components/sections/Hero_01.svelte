<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext } from 'svelte';
    // flowbite plugins
    import { Avatar, Button } from 'flowbite-svelte';
    // node modules

    // local
    import { layoutConfig } from '../../data/layout';
    // Access functions from the context
    const handleCalendly = getContext<() => void>('handleCalendly');
    const handleContact = getContext<() => void>('handleContact');
    const handleConnect = getContext<() => void>('handleConnect');
    const handleScroll = getContext<(sectionId: string) => void>('handleScroll');
</script>

<section id="hero" class="py-8 lg:py-16 my-10 flex w-full flex-wrap items-center justify-between lg:text-left md:text-center">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="grid gap-8 items-center py-8 lg:py-16 mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="mb-4 font-extrabold tracking-tight leading-none text-4xl md:text-5xl xl:text-6xl">Welcome To Your Personal Branded Site</h1>
                <p class="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl"
                    >Ready to turn possibilities into realities? Let's connect and embark on a journey towards success together. Reach out now and take the
                    first step to transforming your vision into action. Your future starts here!</p>
                <button type="button" class="mr-4" on:click={handleConnect}
                    >Let's Connect
                    <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path
                        ></svg>
                </button>
                <button type="button" class="secondary" on:click={() => handleScroll('about')}> Meet Your Guide </button>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Avatar src={layoutConfig.logo.src} size="none" class="rounded-lg w-max h-auto shadow-lg shadow-neutral-900/80" alt={layoutConfig.logo.alt} />
            </div>
        </div>
    </div>
</section>

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

<section id="hero" class="py-8 lg:py-16 my-10">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="grid gap-8 items-center py-8 lg:py-16 mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
            <div class="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
                    >Welcome To Your Personal Branded Site</h1>
                <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl"
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
            <div class="col-span-6">
                <iframe
                    class="mx-auto w-full max-w-xl h-64 rounded-lg sm:h-96"
                    src="https://www.youtube.com/embed/wDchsz8nmbo?si=9S0uYSy_D_XRebQx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>

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

    export {};
</script>

<section id="meet-teddy" class="py-8 lg:py-16 my-10 text-center relative bg-primary-300 dark:bg-darker-400">
    <div class="w-full max-w-screen-2xl mx-auto py-4 px-8">
        <div class="py-4 sm:text-center">
            <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl text-darker-300 dark:text-primary"
                >Learn More And Let's Connect</h2>
            <p class="sm:text-xl text-center"
                >Meet Teddy, your experienced partner in real estate investment. In this video, I share what I bring to the table and what I'm looking for in
                potential partners. Let's explore how we can collaborate to achieve outstanding results and close more deals together.</p>
            <div class="mx-auto mt-8 aspect-video aspect-w-16 aspect-h-9 w-full rounded-lg">
                <iframe
                    src="https://www.youtube.com/embed/NpEaa2P7qZI?si=dFoAaCYIi8q_a-X1&enablejsapi=1"
                    title="YouTube video player"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style="width: 100%; height: 100%;"
                    class="rounded-lg shadow-lg shadow-neutral-900/80">
                </iframe>
            </div>
        </div>
        <div class="text-center w-full">
            <button type="button" class="mt-8 mx-4" on:click={handleConnect}
                >Let's Connect
                <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path
                    ></svg>
            </button>
            <button type="button" class="mt-8 mx-4 secondary" on:click={handleCalendly}>Book A Meeting </button>
        </div>
    </div>
</section>

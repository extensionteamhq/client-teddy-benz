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

<section id="cta" class="py-8 lg:py-16 my-10 text-center relative">
    <div class="w-full max-w-screen-2xl mx-auto py-4 px-8">
        <div class="relative isolate overflow-hidden bg-neutral-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl text-neutral-100">Boost Your Productivity Today</h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
                >Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
            <div class="mt-10 flex items-center justify-center gap-x-2 md:gap-x-6">
                <button type="button" class="md:mr-4 sm:mr-0.5 mb-0" on:click={handleConnect}
                    >Let's Connect
                    <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path
                        ></svg>
                </button>
                <button type="button" class="secondary mb-0" on:click={handleCalendly}>Book A Meeting </button>
            </div>
            <svg
                viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="#ffffff" />
                        <stop offset="1" stop-color="#ffffff" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</section>

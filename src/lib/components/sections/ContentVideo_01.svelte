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
<section id="video" class="py-8 lg:py-16 my-10 text-center">
    <div class="text-sm text-center">
        <p class="text-neutral-900/50 dark:text-neutral-100/50 mb-0 sr-only">Video</p>
    </div>
    <div class="py-4 px-4 mx-auto max-w-screen-xl sm:text-center">
        <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Experience The Journey</h2>
        <p class="sm:text-xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Nulla vitae lectus fringilla, bibendum ligula quis, pulvinar nisl. Aliquam sed arcu mi.</p>
        <!-- alt sample video = https://www.youtube.com/embed/wDchsz8nmbo?si=9S0uYSy_D_XRebQx -->
        <div class="mx-auto mt-8 aspect-video w-full rounded-lg">
            <iframe 
                src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1"
                title="YouTube video player"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style="width: 100%; height: 100%;"
                class="rounded-lg shadow-lg shadow-neutral-900/80">
            </iframe>
        </div>
    </div>
</section>

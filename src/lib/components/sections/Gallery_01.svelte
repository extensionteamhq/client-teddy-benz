<script lang="ts">
    // svelte core
    import { onMount } from 'svelte';

    // svelte plugins

    // flowbite plugins

    // node modules
    import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture';
    import 'bigger-picture/css';

    // local

    // initialize

    // open (will be a child of the target element above)
    let bp: BiggerPictureInstance | null = null;

    const images: string[] = [
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    ];

    onMount(() => {
        bp = BiggerPicture({
            target: document.body,
        });
    });

    function openGallery(e: MouseEvent) {
        e.preventDefault();
        const imageLinks = document.querySelectorAll('#images > a');
        if (!bp) return;

        bp.open({
            items: imageLinks,
            el: e.currentTarget as HTMLAnchorElement,
        });
    }
</script>

<section class="py-8 lg:py-16 my-10 text-center" id="gallery">
    <div class="w-full max-w-screen-2xl mx-auto py-4 px-8 sm:text-center">
        <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Gallery</h2>
        <p class="sm:text-xl text-center">Some of the amazing places we can go to.</p>
        <div id="images" role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {#each images as image}
                <a
                    on:click={openGallery}
                    href={image}
                    data-img={image}
                    data-thumb={image}
                    data-height="2500"
                    data-width="1667"
                    class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={image} alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
                </a>
            {/each}
            <!-- More files... -->
        </div>
    </div>
</section>

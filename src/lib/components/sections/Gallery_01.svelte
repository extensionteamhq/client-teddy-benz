<script lang="ts">
    // svelte core
    import { onMount } from 'svelte';

    // svelte plugins

    // flowbite plugins

    // node modules
    import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture'; //https://biggerpicture.henrygd.me/
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

    // initialize BiggerPicture
    onMount(() => {
        bp = BiggerPicture({
            target: document.body,
        });
    });

    // function to open BiggerPicture
    function openGallery(e: MouseEvent) {
        e.preventDefault();
        // grab image links
        const imageLinks = document.querySelectorAll('#images > a');
        if (!bp) return;
        // open
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
            <!-- {#each images as image}
                <a
                    on:click={openGallery}
                    href={image}
                    data-img={image}
                    data-thumb={image}
                    data-alt="Example"
                    class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={image} alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
                </a>
            {/each} -->

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="1500"
                data-height="2251"
                data-alt="Group Admiring The Costal Sunset"
                data-caption="Group Admiring The Costal Sunset">
                <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt="Group Admiring The Costal Sunset"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
                data-img="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
                data-thumb="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                data-width="1500"
                data-height="2251"
                data-alt="Snow Covered Trail"
                data-caption="Snow Covered Trail">
                <img
                    src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                    alt="Snow Covered Trail"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="1500"
                data-height="2251"
                data-alt="Snow Covered Mountain Top"
                data-caption="Snow Covered Mountain Top">
                <img
                    src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt="Snow Covered Mountain Top"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="2251"
                data-height="1500"
                data-alt="Forest Trail"
                data-caption="Forest Trail">
                <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
                    alt="Forest Trail"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="1500"
                data-height="2251"
                data-alt="Lake Sunset"
                data-caption="Lake Sunset">
                <img
                    src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt="Lake Sunset"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
                data-img="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format"
                data-thumb="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                data-width="2251"
                data-height="1500"
                data-alt="Arial View of Lake and Forest"
                data-caption="Arial View of Lake and Forest">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
                    alt="Arial View of Lake and Forest"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="1500"
                data-height="2251"
                data-alt="Arial View of Rocky Beach"
                data-caption="Arial View of Rocky Beach">
                <img
                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt="Arial View of Rocky Beach"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>
            <a
                on:click={openGallery}
                class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-neutral-900 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100"
                href="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-img="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format"
                data-thumb="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                data-width="2251"
                data-height="1500"
                data-alt="Colorful Canyon"
                data-caption="Colorful Canyon">
                <img
                    src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt="Colorful Canyon"
                    class="pointer-events-none object-cover group-hover:opacity-75" />
            </a>

            <!-- More files go here... -->
        </div>
    </div>
</section>

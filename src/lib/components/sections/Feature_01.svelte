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

<section id="feature" class="py-8 lg:py-16 my-10 text-center md:text-left">
    <div class="items-center w-full max-w-screen-2xl mx-auto lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 px-8 lg:px-6 py-4 sm:py-16">
        <div class="mb-8 lg:mb-0 place-self-start">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Designed To Help You Expand</h2>
            <p class="mb-4 sm:text-xl"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <button type="button" class="mr-2 my-4" on:click={handleConnect}
                >Let's Connect
                <svg class="w-5 h-5 ml-2 -mr-1 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path
                    ></svg>
            </button>
            <button type="button" class="ml-2 my-4 secondary" on:click={handleCalendly}>Book A Meeting </button>
        </div>
        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
                <div class="flex justify-center items-center h-12 w-12 md:m-0 md:mb-4 m-auto">
                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path
                        ></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Marketing</h3>
                <p
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                    ratione. Nulla vitae lectus fringilla, bibendum ligula quis, pulvinar nisl. Aliquam sed arcu mi.</p>
            </div>
            <div>
                <div class="flex justify-center items-center h-12 w-12 md:m-0 md:mb-4 m-auto">
                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path
                        ><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Business Automation</h3>
                <p
                    >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Duis malesuada accumsan ligula, sed semper turpis
                    malesuada in. Integer elementum tempus consequat.</p>
            </div>
            <div>
                <div class="flex justify-center items-center h-12 w-12 md:m-0 md:mb-4 m-auto">
                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                        ></path
                        ><path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clip-rule="evenodd"></path
                        ></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Revenue Streams</h3>
                <p
                    >Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Aenean sodales posuere justo, et lacinia orci
                    consectetur a. Aliquam vestibulum orci massa.</p>
            </div>
            <div>
                <div class="flex justify-center items-center h-12 w-12 md:m-0 md:mb-4 m-auto">
                    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                        ></path
                        ></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Team Oriented</h3>
                <p
                    >Suspendisse nec eleifend tellus, sed vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor lectus eu
                    accumsan eleifend. Duis nec libero eget arcu congue iaculis.</p>
            </div>
        </div>
    </div>
</section>

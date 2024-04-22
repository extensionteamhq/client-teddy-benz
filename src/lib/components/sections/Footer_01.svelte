<script>
    // svelte core

    // svelte plugins
    import Icon from '@iconify/svelte';
    // flowbite plugins
    import { FooterCopyright } from 'flowbite-svelte';
    // node modules

    // local
    import { layoutConfig } from '$lib/data/layout';
</script>

<!--Footer container-->
<footer class="flex flex-col items-center text-center">
    <div class="container pt-9">
        <!-- Social media icons container -->
        <div class="mb-6 flex flex-wrap justify-center space-x-2">
            <!-- facebook -->
            <a
                href="https://facebook.com/{layoutConfig.site.socialHandle_01}"
                title="Facebook"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/facebook-f?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                </span>
            </a>
            <!-- x-twitter -->
            <a
                href="https://twitter.com/{layoutConfig.site.socialHandle_02}"
                title="X-Twitter"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/x-twitter?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                </span>
            </a>
            <!-- linkedin -->
            <a
                href="https://linkedin.com/{layoutConfig.site.socialHandle_03}"
                title="LinkedIn"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/linkedin-in?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                </span>
            </a>
            <!-- instagram -->
            <a
                href="https://instagram.com/{layoutConfig.site.socialHandle_04}"
                title="Instagram"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com/icons/instagram?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                </span>
            </a>
            <!-- youtube -->
            <a
                href="https://youtube.com/@{layoutConfig.site.socialHandle_05}"
                title="YouTube"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/youtube?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                </span>
            </a>
            <!-- tiktok -->
            <a
                href="https://www.threads.net/@{layoutConfig.site.socialHandle_07}"
                title="TikTok"
                target="_blank"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0">
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"
                        ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/threads?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                            d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
                </span>
            </a>
        </div>
    </div>

    <!--Copyright section-->
    <div class="w-full bg-neutral-100 dark:bg-neutral-900 text-center">
        <FooterCopyright spanClass="block text-sm sm:text-center" href="/" by={layoutConfig.site.siteName} />
        <div class="sm:text-center">
            <p class="text-sm leading-8">
                Handcrafted with
                <span class="mx-auto [&>svg]:h-4 [&>svg]:w-4 text-red-600 inline-block align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/heart?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                </span>
                by
                <a href="https://extension.team/personal-sites/" title="Get your own site from Extension Team." target="_blank" class="hover:text-[#ffcb31]">
                    <span class="mx-auto [&>svg]:h-6 [&>svg]:w-auto inline-block align-middle -mt-1 pr-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.5 779.5" xml:space="preserve">
                            <path
                                fill="#FFCB31"
                                d="M769.1 154.1c-10.3-14-27.1-22-46.1-22H330.8l-16.5 43.8H723c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H123.1c-35.5 0-71.8 27.5-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l522.3.2c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8l-415-.1c-35.4 0-71.8 27.4-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l338.3.1c3.5 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H16.5L0 647.4h450.9c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-14-27.1-22-46.1-22l-338.4-.1c-3.6 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 40.9-31.8l415 .1c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-13.9-27.1-22-46.1-22l-522.3-.2c-3.5 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 41-31.8h570.4c35.5 0 71.8-27.5 82.8-62.5 6.1-19.3 3.5-38.9-7.2-53.4z">
                            </path>
                        </svg>
                    </span>
                    Extension Team
                </a>
            </p>
        </div>
    </div>
</footer>

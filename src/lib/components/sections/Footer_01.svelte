<script>
    // svelte core

    // svelte plugins
    import Icon from '@iconify/svelte';
    // flowbite plugins
    import { FooterCopyright } from 'flowbite-svelte';
    // node modules

    // local
    import { layoutConfig } from '../../data/layout';
</script>

<!--Footer container-->
<footer class="flex flex-col items-center text-center">
    <div class="container pt-9">
        <!-- Social media icons container -->
        <div class="mb-6 flex flex-wrap justify-center space-x-2">
            <!-- facebook -->
            <a
                href="https://facebook.com/"
                title="Facebook"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
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
                href="https://twitter.com/"
                title="X-Twitter"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
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
                href="https://linkedin.com/"
                title="LinkedIn"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
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
                href="https://instagram.com/"
                title="Instagram"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
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
                href="https://youtube.com/"
                title="YouTube"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
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
                href="https://tiktok.com/"
                title="TikTok"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/tiktok?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                    </svg>
                </span>
            </a>
            <!-- discord -->
            <a
                href="https://discord.com/"
                title="Discord"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/discord?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                    </svg>
                </span>
            </a>
            <!-- whatsapp -->
            <a
                href="https://whatsapp.com/"
                title="Whatsapp"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/whatsapp?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </span>
            </a>
            <!-- fb-messenger -->
            <a
                href="https://messenger.com/"
                title="Facebook Messenger"
                type="button"
                class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-0"
                data-twe-ripple-init>
                <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/facebook-messenger?f=brands&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
                    </svg>
                </span>
            </a>
        </div>
    </div>

    <!--Copyright section-->
    <div class="w-full bg-neutral-100 dark:bg-neutral-900 text-center">
        <FooterCopyright spanClass="block text-sm sm:text-center" href="/" by={layoutConfig.site.siteName} />
        <div class="sm:text-center">
            <p class="text-sm" data-svelte-h="svelte-3a4mgq">
                Handcrafted with
                <span class="mx-auto [&>svg]:h-4 [&>svg]:w-4 text-red-600 inline-block align-top">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/icons/heart?f=classic&s=solid License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                </span>
                by
                <a href="https://extension.team/" title="Get your own site from Extension Team." target="_blank" class="hover:text-[#ffcb31]">
                    <span class="mx-auto [&>svg]:h-6 [&>svg]:w-auto inline-block align-top -mt-1 pr-0.5">
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

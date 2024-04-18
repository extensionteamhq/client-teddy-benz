<script>
    // svelte core
    import { layoutConfig } from '$lib/data/layout';
    // svelte plugins
    import Icon from '@iconify/svelte';
    // flowbite plugins
    import { Avatar, Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    // node modules

    // local
</script>

<!-- //////////////////////////////////////////////
     WARNING: THIS IS CURRENTLY A WORK IN PROGRESS! 
     //////////////////////////////////////////////-->
<Footer class="container mx-auto px-10 sm:px-0 pt-16 border-t border-gray-500/20">
    <div class="md:flex md:justify-between">
        <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
            <div class="col-span-4">
                <div class="mb-6 md:mb-0 col-span-1 sm:col-span-3">
                    <span class="inline-flex items-baseline">
                        <Avatar
                            src={layoutConfig.logo.src}
                            size="none"
                            class="rounded-lg w-auto me-3 h-8 sm:h-14 inline self-center"
                            alt={layoutConfig.logo.alt} />
                        <span class="self-center text-3xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-50">{layoutConfig.site.siteName}</span>
                    </span>
                    <p class="text-base mt-4 lg:pr-20"
                        >Meet {layoutConfig.site.fullName}—where expertise meets your goals. In this bio, discover the journey that's fueled by passion,
                        dedication, and a knack for turning challenges into opportunities. Here to guide, inspire, and collaborate, {layoutConfig.site
                            .firstName} brings tailored solutions to your doorstep. Let's unlock your potential, together. Welcome!</p>
                </div>
            </div>
            <div class="col-span-2">
                <div class="grid grid-cols-3 gap-4 lg:gap-2">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase">Navigation</h2>
                        <FooterLinkGroup ulClass="text-gray-700 dark:text-gray-50">
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/">Home</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/#services">Services</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/#about">About</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/">Contact</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase">Follow Me</h2>
                        <FooterLinkGroup ulClass="text-gray-700 dark:text-gray-50">
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" target="_blank" href="http://instagram.com/"
                                >Instagram</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" target="_blank" href="http://facebook.com/"
                                >Facebook</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" target="_blank" href="http://youtube.com/">YouTube</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" target="_blank" href="http://linkedin.com/"
                                >LinkedIn</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <FooterLinkGroup ulClass="text-gray-700 dark:text-gray-50">
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/cookie-policy">Cookie Policy</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/terms-of-service">Terms of Service</FooterLink>
                            <FooterLink liClass="mb-4" aClass="hover:text-gray-400 antialiased" href="/disclaimers">Disclaimers</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-500/20 sm:mx-auto lg:my-8 -mx-10" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright spanClass="block text-sm sm:text-center text-gray-700 dark:text-gray-50" href="/" by={layoutConfig.site.siteName} />
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 px-0">
            <!-- https://iconify.design/ via https://icones.js.org/ -->
            <ul class="flex flex-wrap items-center gap-x-2 gap-y-5 flex-colflex-row">
                <li class="w-6">
                    <a aria-label="Instagram" href="https://instagram.com" class="hover:text-gray-400">
                        <Icon icon="entypo-social:instagram-with-circle" width="100%" />
                    </a>
                </li>
                <li class="w-6">
                    <a aria-label="Facebook" href="https://facebook.com" class="hover:text-gray-400">
                        <Icon icon="entypo-social:facebook-with-circle" width="100%" />
                    </a>
                </li>
                <li class="w-6">
                    <a aria-label="Twitter" href="https://twitter.com" class="hover:text-gray-400">
                        <Icon icon="entypo-social:twitter-with-circle" width="100%" />
                    </a>
                </li>
                <li class="w-6">
                    <a aria-label="LinkedIn" href="https://linkedin.com" class="hover:text-gray-400">
                        <Icon icon="entypo-social:linkedin-with-circle" width="100%" />
                    </a>
                </li>
                <li class="w-6">
                    <a aria-label="YouTube" href="https://youtube.com" class="hover:text-gray-400">
                        <Icon icon="entypo-social:youtube-with-circle" width="100%" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="sm:flex sm:items-center sm:justify-between pt-4 sm:pt-0">
        <p class="mb-10 text-sm" data-svelte-h="svelte-3a4mgq"
            >Made with <span class="text-red-500">♥</span> by
            <a href="https://extension.team/" target="_blank" class="hover:text-[#ffcb31]">
                <svg class="w-5 h-auto inline-block align-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.5 779.5" xml:space="preserve"
                    ><path
                        fill="#FFCB31"
                        d="M769.1 154.1c-10.3-14-27.1-22-46.1-22H330.8l-16.5 43.8H723c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H123.1c-35.5 0-71.8 27.5-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l522.3.2c3.6 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8l-415-.1c-35.4 0-71.8 27.4-82.8 62.5-6.1 19.5-3.5 39.1 7.2 53.6 10.3 14 27.1 22 46.1 22l338.3.1c3.5 0 8.3.7 10.8 4.1 2.3 3.2 2.6 8.5.7 14.6-5.3 16.9-24.4 31.8-41 31.8H16.5L0 647.4h450.9c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-14-27.1-22-46.1-22l-338.4-.1c-3.6 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 40.9-31.8l415 .1c35.5 0 71.8-27.5 82.8-62.5 6.1-19.5 3.5-39.1-7.2-53.6-10.3-13.9-27.1-22-46.1-22l-522.3-.2c-3.5 0-8.3-.7-10.8-4.1-2.3-3.2-2.6-8.5-.7-14.6 5.3-16.9 24.4-31.8 41-31.8h570.4c35.5 0 71.8-27.5 82.8-62.5 6.1-19.3 3.5-38.9-7.2-53.4z"
                    ></path
                    ></svg>
                Extension.Team</a> in 🌴 St. Pete, Florida</p>
    </div>
</Footer>

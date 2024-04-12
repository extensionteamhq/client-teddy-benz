<script lang="ts">
    // svelte core
    import { onMount } from 'svelte';
    // svelte plugins
    import { Modals, closeModal, openModal } from 'svelte-modals';
    // flowbite plugins

    // tw-element plugins
    // import { Collapse, Modal, Tooltip } from 'tw-elements';

    // node modules

    // local
    import { layoutConfig } from '../lib/data/layout';

    // onMount(async () => {
    //     const { Collapse, Modal, Tooltip, initTWE } = await import('tw-elements');
    //     initTWE({ Collapse, Modal, Tooltip });
    // });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{layoutConfig.site.siteName} | Homepage</title>
    <meta property="og:title" content="{layoutConfig.site.siteName} | Homepage" />
    <meta name="description" content="" />
    <meta property="og:description" content="" />
    <meta name="author" content={layoutConfig.site.fullName} />
    <meta property="og:image" content={layoutConfig.logo.src} />
    <meta property="og:url" content="" />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "",
                "postalCode": "",
                "addressRegion": "",
                "addressLocality": ""
            },
            "description": "",
            "image": "",
            "email": "",
            "url": ""
        }
    </script>
</svelte:head>

<!-- The `container` class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport. -->
<main class="mt-24 mx-auto" id="home">
    <!-- hero -->
    <svelte:component this={layoutConfig.hero} />

    <!-- feature -->
    {#if layoutConfig.feature.visible}
        <svelte:component this={layoutConfig.feature.component} />
    {/if}

    <!-- services -->
    {#if layoutConfig.service.visible}
        <svelte:component this={layoutConfig.service.component} />
    {/if}

    <!-- about -->
    {#if layoutConfig.about.visible}
        <svelte:component this={layoutConfig.about.component} />
    {/if}

    <!-- video -->
    {#if layoutConfig.video.visible}
        <svelte:component this={layoutConfig.video.component} />
    {/if}

    <!-- cta -->
    {#if layoutConfig.cta.visible}
        <svelte:component this={layoutConfig.cta.component} />
    {/if}

    <!-- newsletter -->
    {#if layoutConfig.newsletter.visible}
        <svelte:component this={layoutConfig.newsletter.component} />
    {/if}

    <!-- gallery -->
    {#if layoutConfig.gallery.visible}
        <svelte:component this={layoutConfig.gallery.component} />
    {/if}

    <!-- contact -->
    {#if layoutConfig.contact.visible}
        <svelte:component this={layoutConfig.contact.component} />
    {/if}

    <!-- sponsors -->
    {#if layoutConfig.sponsors.visible}
        <svelte:component this={layoutConfig.sponsors.component} />
    {/if}
</main>

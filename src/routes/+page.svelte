<script lang="ts">
    // svelte core

    // svelte plugins

    // other plugins and modules

    // local
    import { layoutConfig } from '$lib/data/layout';
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{layoutConfig.site.siteName} | Homepage</title>
    <meta property="og:title" content="{layoutConfig.site.siteName} | Homepage" />
    <meta name="description" content="" />
    <meta property="og:description" content="" />
    <meta name="author" content="{layoutConfig.site.fullName} - {layoutConfig.site.orgName}" />
    <meta property="og:image" content={layoutConfig.logo.src} />
    <meta property="og:url" content={layoutConfig.site.siteURL} />
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

<!-- navbar -->
{#if layoutConfig.navbar.visible}
    <svelte:component this={layoutConfig.navbar.component} />
{/if}

<!-- main -->
<main class="mx-auto" id="home">
    <!-- hero -->
    {#if layoutConfig.hero.visible}
        <svelte:component this={layoutConfig.hero.component} />
    {/if}

    <!-- services -->
    {#if layoutConfig.service.visible}
        <svelte:component this={layoutConfig.service.component} />
    {/if}

    <!-- about -->
    {#if layoutConfig.about.visible}
        <svelte:component this={layoutConfig.about.component} />
    {/if}

    <!-- feature -->
    {#if layoutConfig.feature.visible}
        <svelte:component this={layoutConfig.feature.component} />
    {/if}

    <!-- video -->
    {#if layoutConfig.video.visible}
        <svelte:component this={layoutConfig.video.component} />
    {/if}

    <!-- newsletter -->
    {#if layoutConfig.newsletter.visible}
        <svelte:component this={layoutConfig.newsletter.component} />
    {/if}

    <!-- gallery -->
    {#if layoutConfig.gallery.visible}
        <svelte:component this={layoutConfig.gallery.component} />
    {/if}

    <!-- cta -->
    {#if layoutConfig.cta.visible}
        <svelte:component this={layoutConfig.cta.component} />
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

<!-- footer -->
{#if layoutConfig.footer.visible}
    <svelte:component this={layoutConfig.footer.component} />
{/if}

<!-- speeddial -->
{#if layoutConfig.speeddial.visible}
    <svelte:component this={layoutConfig.speeddial.component} />
{/if}

<script lang="ts">
    // svelte core

    // svelte plugins
    import { getContext } from 'svelte';
    // other plugins and modules

    // local
    import { layoutConfig } from '$lib/data/layout';
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>About</title>
    <meta property="og:title" content="" />
    <meta name="description" content="" />
    <meta property="og:description" content="" />
    <meta name="author" content="" />
    <meta property="og:image" content="" />
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
<div class="container mx-auto pt-44 mb-10" id="privacy">
    <h1 class="text-3xl font-bold my-6"> Privacy Policy </h1>
    <p>Effective date: April 15th, 2024</p>

    <p
        >{layoutConfig.site.siteName}, it's representatives, and associates (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, protect, and handle your personal information on {layoutConfig.site.siteURL}.</p>

    <p class="font-bold">1. Information We Collect</p>

    <p
        >We collect information from you when you voluntarily provide us with such information, including but not limited to your name, phone number, and email
        address. This occurs when you:</p>

    <ul class="list-disc">
        <ol>Sign up for our newsletter</ol>
        <ol>Contact us for inquiries</ol>
    </ul>

    <p class="font-bold">2. Use of Information</p>

    <p>The information we collect from you may be used in the following ways:</p>

    <ul class="list-disc">
        <ol>To personalize your experience and respond to your individual needs</ol>
        <ol>To improve our website and services</ol>
        <ol>To contact you with updates, promotional offers, and other information related to our services</ol>
    </ul>

    <p class="font-bold">3. Protection of Information</p>

    <p
        >We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal
        information. These measures comply with best practices in the industry.</p>

    <p class="font-bold">4. Disclosure of Information</p>

    <p
        >We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties
        who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

    <p class="font-bold">5. Opt-Out Rights</p>

    <p
        >If at any time you would like to unsubscribe from receiving future emails or phone communications, you can <a
            href="/#contact"
            class="font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">contact us</a> and we will promptly remove
        you from all correspondence.</p>

    <p class="font-bold">6. Contacting Us</p>

    <p
        >If there are any questions regarding this privacy policy, you may <a
            href="/#contact"
            class="font-bold underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">contact us</a
        >.</p>

    <p class="font-bold">Changes to our Privacy Policy</p>

    <p>If we decide to change our privacy policy, we will post those changes on this page and/or update the Privacy Policy modification date above.</p>
</div>

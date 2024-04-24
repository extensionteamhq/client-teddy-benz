// Define interfaces for site info, logo, and section visibility
interface SiteInfo {
    siteName: string;
    siteURL: string;
    siteDomain: string;
    timeZone: string;

    orgName: string;
    orgTitle: string;
    orgRole: string;

    fullName: string;
    titleName: string;
    nickName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    suffixName: string;

    addType_01: string;
    addressName_01: string;
    addStreet1_01: string;
    addStreet2_01: string;
    addCity_01: string;
    addRegion_01: string;
    addPostalCode_01: string;
    addCountry_01: string;

    addType_02: string;
    addressName_02: string;
    addStreet1_02: string;
    addStreet2_02: string;
    addCity_02: string;
    addRegion_02: string;
    addPostalCode_02: string;
    addCountry_02: string;

    telType_01: string;
    telNumber_01: string;
    telNumDigits_01: string;
    telType_02: string;
    telNumber_02: string;
    telNumDigits_02: string;

    emailType_01: string;
    emailAdd_01: string;
    emailType_02: string;
    emailAdd_02: string;

    urlType_01: string;
    urlAdd_01: string;
    urlType_02: string;
    urlAdd_02: string;

    socialType_01: string;
    socialHandle_01: string;
    socialType_02: string;
    socialHandle_02: string;
    socialType_03: string;
    socialHandle_03: string;
    socialType_04: string;
    socialHandle_04: string;
    socialType_05: string;
    socialHandle_05: string;
    socialType_06: string;
    socialHandle_06: string;
    socialType_07: string;
    socialHandle_07: string;
    socialType_08: string;
    socialHandle_08: string;
    socialType_09: string;
    socialHandle_09: string;

    vCardNote: string;
}

interface vCard {
    src: string;
    alt: string;
}

interface Logo {
    src: string;
    alt: string;
}

interface SectionVisibility {
    component: any; // Use any for maximum flexibility
    visible: boolean;
}

// Interface for the entire layout configuration
interface LayoutConfig {
    vCard: vCard;
    site: SiteInfo;
    logo: Logo;
    infobanner: SectionVisibility;
    navbar: SectionVisibility;
    hero: SectionVisibility;
    feature: SectionVisibility;
    service: SectionVisibility;
    about: SectionVisibility;
    video: SectionVisibility;
    gallery: SectionVisibility;
    cta: SectionVisibility;
    sponsors: SectionVisibility;
    newsletter: SectionVisibility;
    contact: SectionVisibility;
    footer: SectionVisibility;
    speeddial: SectionVisibility;
}

// Define site info object
const site: SiteInfo = {
    siteName: 'Teddy Benz',
    siteURL: 'https://teddybenz.com/',
    siteDomain: 'teddybenz.com',
    timeZone: '-500',

    orgName: 'Creative Home Holdings',
    orgTitle: 'Real Estate Investor',
    orgRole: '',

    fullName: 'Teddy Benz',
    titleName: '',
    nickName: '',
    firstName: 'Teddy',
    middleName: '',
    lastName: 'Benz',
    suffixName: '',

    addType_01: 'Home',
    addressName_01: 'Home',
    addStreet1_01: '',
    addStreet2_01: '',
    addCity_01: 'Greenville',
    addRegion_01: 'SC',
    addPostalCode_01: '',
    addCountry_01: 'United States',

    addType_02: 'Work',
    addressName_02: '',
    addStreet1_02: '',
    addStreet2_02: '',
    addCity_02: '',
    addRegion_02: '',
    addPostalCode_02: '',
    addCountry_02: '',

    telType_01: '',
    telNumber_01: '',
    telNumDigits_01: '',
    telType_02: 'Mobile',
    telNumber_02: '+1 (716) 817-4056',
    telNumDigits_02: '17168174056',

    emailType_01: 'Home',
    emailAdd_01: '',
    emailType_02: 'Work',
    emailAdd_02: 'teddy@creativeHome.co',

    urlType_01: 'Personal',
    urlAdd_01: 'https://teddybenz.com/',
    urlType_02: 'Work',
    urlAdd_02: '',

    socialType_01: 'Facebook',
    socialHandle_01: 'xteddybenz',
    socialType_02: 'Twitter',
    socialHandle_02: 'theodorebenz',
    socialType_03: 'LinkedIn',
    socialHandle_03: 'teddybenz',
    socialType_04: 'Instagram',
    socialHandle_04: 'teddybenz',
    socialType_05: 'YouTube',
    socialHandle_05: 'teddybenz',
    socialType_06: 'TikTok',
    socialHandle_06: '',
    socialType_07: 'Threads',
    socialHandle_07: 'teddybenz',
    socialType_08: '',
    socialHandle_08: '',
    socialType_09: '',
    socialHandle_09: '',

    vCardNote:
        "From Buffalo, NY. Currently in Greenville, SC. Looking to expand my real estate holdings in the Carolinas and Georgia. I also do a lot of land wholesaling. Let's Work together and do a deal.",
};

// Define a vCard object
const vCard: vCard = {
    src: '/vcard.vcf',
    alt: 'My vCard',
};

// Define a logo object
const logo: Logo = {
    src: '/images/Teddy-Benz-Headshot-custom-bg-720x720.webp',
    alt: 'Teddy Benz',
};

// Import components as needed…

import Speeddial from '$lib/components/base/Speeddial.svelte';

// info banners
import InfoBanner_01 from '$lib/components/sections/InfoBanner_01.svelte';

// navbar
import NavBar_01 from '$lib/components/sections/NavBar_01.svelte';

// hero
import Hero_01 from '$lib/components/sections/Hero_01.svelte';
import Hero_02 from '$lib/components/sections/Hero_02.svelte';

// feature
import Feature_01 from '$lib/components/sections/Feature_01.svelte';

// service
import Service_01 from '$lib/components/sections/Service_01.svelte';

// about
import About_01 from '$lib/components/sections/About_01.svelte';

// video
import ContentVideo_01 from '$lib/components/sections/ContentVideo_01.svelte';

// gallery
import Gallery_01 from '$lib/components/sections/Gallery_01.svelte';

// cta
import CallToAction_01 from '$lib/components/sections/CallToAction_01.svelte';

// sponsor
import Sponsors_01 from '$lib/components/sections/Sponsors_01.svelte';

// newsletter
import Newsletter_01 from '$lib/components/forms/Newsletter_01.svelte';

// contact
import Contact_01 from '$lib/components/sections/Contact_01.svelte';

// footer
import Footer_01 from '$lib/components/sections/Footer_01.svelte';
import Footer_02 from '$lib/components/sections/Footer_02.svelte';

// Define and export the layout configuration
export const layoutConfig: LayoutConfig = {
    vCard,
    site,
    logo,
    infobanner: {
        component: InfoBanner_01,
        visible: false,
    },
    navbar: {
        component: NavBar_01,
        visible: true,
    },
    hero: {
        component: Hero_01,
        visible: true,
    },
    feature: {
        component: Feature_01,
        visible: false,
    },
    service: {
        component: Service_01,
        visible: true,
    },
    about: {
        component: About_01,
        visible: true,
    },
    video: {
        component: ContentVideo_01,
        visible: false,
    },
    gallery: {
        component: Gallery_01,
        visible: false,
    },
    cta: {
        component: CallToAction_01,
        visible: false,
    },
    sponsors: {
        component: Sponsors_01,
        visible: true,
    },
    newsletter: {
        component: Newsletter_01,
        visible: false,
    },
    contact: {
        component: Contact_01,
        visible: true,
    },
    speeddial: {
        component: Speeddial,
        visible: true,
    },
    footer: {
        component: Footer_01,
        visible: true,
    },
};

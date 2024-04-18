// Define interfaces for site info, logo, and section visibility
interface SiteInfo {
    siteName: string;
    siteURL: string;
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
    navbar: any; // Any Svelte component
    hero: any; // Any Svelte component
    feature: SectionVisibility;
    service: SectionVisibility;
    about: SectionVisibility;
    video: SectionVisibility;
    gallery: SectionVisibility;
    cta: SectionVisibility;
    sponsors: SectionVisibility;
    newsletter: SectionVisibility;
    contact: SectionVisibility;
    footer: any; // Any Svelte component
}

// Define site info object
const site: SiteInfo = {
    siteName: 'Personal Branded Site',
    siteURL: 'https://domain.com/',
    timeZone: '-500',

    orgName: 'Personal Branded Websites',
    orgTitle: 'Avatar Specialist',
    orgRole: 'Member',

    fullName: 'Alex Suprun',
    titleName: '',
    nickName: 'Spuns',
    firstName: 'Alex',
    middleName: '',
    lastName: 'Suprun',
    suffixName: '',

    addType_01: 'HOME',
    addressName_01: '',
    addStreet1_01: '1234 Main St N',
    addStreet2_01: 'Apt 4200',
    addCity_01: 'St. Petersburg',
    addRegion_01: 'FL',
    addPostalCode_01: '33701',
    addCountry_01: 'USA',
    addType_02: 'WORK',
    addressName_02: '',
    addStreet1_02: '7900 1st St N',
    addStreet2_02: 'Ste 100',
    addCity_02: 'St. Petersburg',
    addRegion_02: 'FL',
    addPostalCode_02: '33702',
    addCountry_02: 'USA',

    telType_01: 'HOME',
    telNumber_01: '+1 (727) 222-4444',
    telNumDigits_01: '17272224444',
    telType_02: 'WORK',
    telNumber_02: '+1 (727) 555-0000',
    telNumDigits_02: '17275550000',

    emailType_01: 'HOME',
    emailAdd_01: 'alexsuprun@homedomain.com',
    emailType_02: 'WORK',
    emailAdd_02: 'hello@workdomain.com',

    urlType_01: 'HOME',
    urlAdd_01: 'https://homedomain.com/',
    urlType_02: 'WORK',
    urlAdd_02: 'https://workdomain.com/',

    socialType_01: 'Facebook',
    socialHandle_01: 'alexsuprun',
    socialType_02: 'Twitter',
    socialHandle_02: 'alexsuprun',
    socialType_03: 'LinkedIn',
    socialHandle_03: 'alexsuprun',
    socialType_04: 'Instagram',
    socialHandle_04: 'alexsuprun',
    socialType_05: 'YouTube',
    socialHandle_05: 'alexsuprun',
    socialType_06: 'TikTok',
    socialHandle_06: 'alexsuprun',
    socialType_07: '',
    socialHandle_07: '',
    socialType_08: '',
    socialHandle_08: '',
    socialType_09: '',
    socialHandle_09: '',

    vCardNote:
        "I'm Alex Suprun, a connoisseur of the subtle art of connection. I weave the mundane into the magical with ease, turning pet whispers into the talk of the town. My knack for reading a room's vibe rivals ancient oracles, and my adventures often involve epic quests for legendary late-night snacks.",
};

// Define a vCard object
const vCard: vCard = {
    src: '/vcard.vcf',
    alt: 'My vCard',
};

// Define a logo object
const logo: Logo = {
    src: '/images/alex-suprun-ZHvM3XIOHoE-unsplash.webp',
    alt: 'Personal Branded Site Avatar',
};

// Import components as needed…

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
        visible: true,
    },
    navbar: NavBar_01,
    hero: Hero_01,
    feature: {
        component: Feature_01,
        visible: true,
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
        visible: true,
    },
    gallery: {
        component: Gallery_01,
        visible: true,
    },
    cta: {
        component: CallToAction_01,
        visible: true,
    },
    sponsors: {
        component: Sponsors_01,
        visible: true,
    },
    newsletter: {
        component: Newsletter_01,
        visible: true,
    },
    contact: {
        component: Contact_01,
        visible: true,
    },
    footer: Footer_01,
};

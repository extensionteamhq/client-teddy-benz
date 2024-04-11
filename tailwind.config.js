/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            // screens: {},
            // colors: {
            //     ...colors,
            //     gray: colors.gray,
            //     gray: colors.gray,
            //     zinc: colors.zinc,
            //     neutral: colors.neutral,
            //     stone: colors.stone,
            //     red: colors.red,
            //     orange: colors.orange,
            //     amber: colors.amber,
            //     yellow: colors.yellow,
            //     lime: colors.lime,
            //     green: colors.green,
            //     emerald: colors.emerald,
            //     teal: colors.teal,
            //     cyan: colors.cyan,
            //     sky: colors.sky,
            //     blue: colors.blue,
            //     indigo: colors.indigo,
            //     violet: colors.violet,
            //     purple: colors.purple,
            //     fuchsia: colors.fuchsia,
            //     pink: colors.pink,
            //     rose: color.rose,
            // },
            // fontFamily: {},
        },
        container: {
            center: true,
        },
    },
    plugins: [require('flowbite/plugin'), require('@tailwindcss/aspect-ratio')],
    darkMode: 'class',
};

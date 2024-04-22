/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6A8ED9',
                    50: '#EFF4FC',
                    100: '#E0E8F9',
                    200: '#D1DDF5',
                    300: '#C1D2F2',
                    400: '#B2C6EE',
                    500: '#A4BBEA',
                    600: '#95B0E6',
                    700: '#86A5E2',
                    800: '#7899DD',
                    900: '#6A8ED9',
                },
                darker: {
                    100: '#5B7BBC',
                    200: '#4D68A1',
                    300: '#3F5686',
                    400: '#31446C',
                    500: '#243453',
                    600: '#18243B',
                    700: '#0D1525',
                    800: '#040711',
                    900: '#000102',
                },
            },

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
    plugins: [require('flowbite/plugin'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
    darkMode: 'class',
};

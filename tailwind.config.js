import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'verde-bg': '#008069',
                'verde-bg-web': '#25d366',
                'gray-bg': '#fcfefd',
                'gray-bg2': '#dfe5e7',
                'gray-hover': '#8696a0',
                'gray-text': '#667781',
            }
        },
    },

    plugins: [forms],
};

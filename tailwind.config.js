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
                'forest-green': '#008069',
                'apple-green': '#25d366',
                'light-gray': '#fcfefd',
                'pearl-gray': '#dfe5e7',
                'steel-gray': '#8696a0',
                'slate-gray': '#667781',
            },
        },
    },

    plugins: [forms],
};

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
                whatsapp: {
                    light: {
                        primary: '#25D366',
                        secondary: '#075E54',
                        lightGray: '#E5E5E5',
                        darkGray: '#D8D8D8',
                        white: '#FFFFFF',
                    },
                    dark: {
                        primary: '#25D366',
                        secondary: '#075E54',
                        lightGray: '#1C1C1C',
                        darkGray: '#0F0F0F',
                        black: '#000000',
                    },
                },
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

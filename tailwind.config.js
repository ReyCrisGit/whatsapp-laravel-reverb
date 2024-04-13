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
                // Modo Claro
                'wh-primary': '#075e54', /* Verde Primario */
                'wh-primary-light': '#128c7e', /* Verde Primario Claro */
                'wh-primary-dark': '#044a3e', /* Verde Primario Oscuro */
                'wh-secondary': '#25d366', /* Verde Secundario */
                'wh-secondary-light': '#5efc82', /* Verde Secundario Claro */
                'wh-secondary-dark': '#1aad59', /* Verde Secundario Oscuro */
                'wh-background': '#f5f5f5', /* Fondo */
                'wh-text-primary': '#333333', /* Texto Primario */
                'wh-text-secondary': '#767676', /* Texto Secundario */
                'wh-text-placeholder': '#b3b3b3', /* Texto de Placeholder */
                'wh-divider': '#eaeaea', /* Separador */

                // Modo Oscuro
                'wh-dark-primary': '#128c7e', /* Verde Oscuro Primario */
                'wh-dark-secondary': '#1aad59', /* Verde Oscuro Secundario */
                'wh-dark-background': '#111111', /* Fondo Oscuro */
                'wh-dark-text-primary': '#f5f5f5', /* Texto Oscuro Primario */
                'wh-dark-text-secondary': '#b3b3b3', /* Texto Oscuro Secundario */
                'wh-dark-text-placeholder': '#767676', /* Texto Oscuro de Placeholder */
                'wh-dark-divider': '#333333', /* Separador Oscuro */
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

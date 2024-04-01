import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 dark:border-verde-bg-web text-indigo-700 dark:text-white bg-indigo-50 dark:bg-verde-bg-web/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-verde-bg-web/50 focus:border-indigo-700 dark:focus:border-indigo-300'
                    : 'border-transparent text-white dark:text-white hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-verde-bg-web/20 hover:border-verde-bg-web dark:hover:border-verde-bg-web focus:text-gray-800 dark:focus:text-white focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-verde-bg-web'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}

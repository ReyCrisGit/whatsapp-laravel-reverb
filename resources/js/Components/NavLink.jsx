import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-wh-primary dark:text-white focus:border-wh-primary-light'
                    : 'border-transparent text-wh-dark-text-primary hover:text-gray-700 dark:hover:text-white hover:border-gray-300 focus:text-gray-700 focus:border-gray-300') +
                className
            }
        >
            {children}
        </Link>
    );
}

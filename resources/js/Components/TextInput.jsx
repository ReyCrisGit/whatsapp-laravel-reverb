import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 text-wh-text-primary dark:border-none dark:bg-pearl-gray dark:text-black focus:border-indigo-500 dark:focus:border-forest-green focus:ring-indigo-500 dark:focus:ring-forest-green rounded-md shadow-sm w-[320px]' +
                className
            }
            ref={input}
        />
    );
});

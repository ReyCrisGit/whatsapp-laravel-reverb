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
                'border-gray-300 dark:border-none dark:bg-gray-bg2 dark:text-black focus:border-indigo-500 dark:focus:border-verde-bg focus:ring-indigo-500 dark:focus:ring-verde-bg rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});

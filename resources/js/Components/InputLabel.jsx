export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-wh-dark-text-primary dark:text-wh-dark-text-primary ` + className}>
            {value ? value : children}
        </label>
    );
}

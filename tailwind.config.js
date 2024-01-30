/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,tsx,ts,scss}'],
    theme: {
        extend: {
            colors: {
                'text-color': 'var(--text-color)',
                'text-reverse-color': 'var(--text-reverse-color)',
                'background-color': 'var(--background-color)',
                'primary-color': 'var(--primary-color)',
                'secondary-color': 'var(--secondary-color)',
                'accent-color': 'var(--accent-color)',
            },
            screens: {
                'ml': '480px',
            },
        },
    },
    plugins: [],
};

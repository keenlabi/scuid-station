/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontSize: {
      'custom-sm': '0.875rem', // (14px),
      'custom-base': '1rem', // (16px),
      'custom-lg': '1.125rem', // (18px),
      'custom-xl': '1.25rem', // (20px),
      'custom-2xl': '1.5rem', // (24px),
      'custom-3xl': '1.875rem', // (30px),
      'custom-4xl': '2.25rem', // (36px),
      'custom-5xl': '3rem', // (48px),
    },
    colors: {
      'black-100': "var(--black-accent-100)",
      'black-200': "var(--black-faded-accent-100)",
      'light-grey-100': "var(--light-grey-accent-100)",
    }
  },
};
export const plugins = [];


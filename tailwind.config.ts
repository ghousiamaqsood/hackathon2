

     
 import type { Config } from 'tailwindcss';

 const config: Config = {
   content: [
     './pages/**/*.{js,ts,jsx,tsx}', // Next.js کے صفحات کی فائلز
     './components/**/*.{js,ts,jsx,tsx}', // آپ کے تمام components
    './app/**/*.{js,ts,jsx,tsx}', // App directory (Next.js 13+ projects)
  ],
  theme: {
     extend: {
      colors: {
          primary: '#1D4ED8',
         secondary: '#9333EA',
         border: '#e5e7eb',
         green: '#10B981', //
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font-family
      },
    },
  },
  plugins: [],
};


export default config;

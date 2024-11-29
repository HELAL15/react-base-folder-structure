/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        md: '30px',
        lg: '30px',
        xl: '30px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      maxHeight: {
        '0': '0',
        'full': '100vh', 
      },

      colors: {
        body:'#FFFFFF',
        primary: {
          DEFAULT: '#000000',
          white: '#ffffff',
        },
        
        accent: {
          DEFAULT: '#DB4444',
          hover: '#B23636',
        },
        light:'#F5F5F5',
        green:'#00FF66',
        star:'#FFAD33',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0,0 )' },
          '20%, 80%': { transform: 'translate3d(2px, 0,0 )' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0,0 )' },
          '40%, 60%': { transform: 'translate3d(4px, 0,0 )' },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
      boxShadow: {
        'shadow': '0px 1px 13px 0px #0000000D',
      },
    },
  },
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  plugins: [
    require('tailwindcss-dir')(),
  ],
}

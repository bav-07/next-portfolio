/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'hero-dark' : "url('../../public/blackBackground.jpeg')",
        'hero-light' : "url('../../public/whiteBackground.jpeg')"
      },
      animation: {
        text: 'text 6s ease infinite',
        'text-gradient': 'text-gradient 6s ease infinite',
        'text-moving-background': 'text-moving-background 4s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '0%, 25%, 100%': {
            color: 'black'
          },
          '50%, 75%': {
            color: '#00000000'
          }
        },
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '0%, 25%, 100%': {
            color: '#00000000'
          },
          '50%, 75%': {
            color: 'black'
          }
        },
        'text-moving-background': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          }
        }
      },
      
    },
  },
  plugins: [],
}
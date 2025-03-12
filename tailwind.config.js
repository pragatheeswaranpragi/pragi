module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
          animation: {
            text: 'text 5s ease infinite',
            blob: "blob 7s infinite",
            matrix: 'matrix 20s linear infinite',
            pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
            },
            blob: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
              },
              "33%": {
                transform: "translate(30px, -50px) scale(1.1)",
              },
              "66%": {
                transform: "translate(-20px, 20px) scale(0.9)",
              },
              "100%": {
                transform: "translate(0px, 0px) scale(1)",
              },
            },
            matrix: {
              '0%': { backgroundPosition: '0% 0%' },
              '100%': { backgroundPosition: '100% 100%' },
            },
          },
        },
      },
  plugins: [],
}

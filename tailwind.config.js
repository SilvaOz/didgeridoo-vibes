/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
       colors: {
      primary: '#C084FC', // por ejemplo, un lila mágico
      accent: '#22D3EE',  // azul místico
      background: '#0E0E0E', // fondo profundo
    }

    },
  },
  plugins: [],
}


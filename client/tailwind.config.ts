import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:
    {
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        signika: ['var(--font-signika)', ...fontFamily.sans],
        signikaNegative: ['var(--font-signika-negative)', ...fontFamily.sans],
      },
      textColor: {
        'primary' : '#212B36',
        'secondary' : '#945D87',
      },
      borderColor: {
        'primary' : '#945D87',
      },
      backgroundColor: {
        'primary' : '#F8FAFF',
        'secondary' : '#945D87',
        'secondary-200' : '#E9E2ED',
        'accent': '#EECC70',
      },
      ringColor: {
        'secondary' : '#945D87',
      },
      ringOffsetColor: {
        'secondary' : '#E9E2ED',
      },
  },
},
  plugins: [],
} satisfies Config;



import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorph': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neumorph-dark': '20px 20px 60px #1a1a1a, -20px -20px 60px #2a2a2a',
        'neumorph-inset': 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
        'neumorph-inset-dark': 'inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #2a2a2a',
        'neumorph-subtle': '3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff',
        'neumorph-subtle-dark': '3px 3px 6px #1a1a1a, -3px -3px 6px #2a2a2a',
      }
    },
  },
  plugins: [],
} satisfies Config;

import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        disabledOpacity: '0.4', // opacity-[0.3]
        radius: {
          small: '4px', // rounded-small
          medium: '6px', // rounded-medium
          large: '8px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium
          large: '2px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: '#f9fafb', // light gray for background
              foreground: '#1f2937', // dark gray for text
            },
            default: {
              DEFAULT: '#e5e7eb', // light neutral gray
              foreground: '#374151', // medium gray for contrast
            },
            primary: {
              DEFAULT: '#0e7490', // base color
              foreground: '#ffffff', // white text for contrast
            },
            secondary: {
              DEFAULT: '#38bdf8', // lighter blue-teal
              foreground: '#1e3a8a', // darker blue for text
            },
            success: {
              DEFAULT: '#16a34a', // vibrant green
              foreground: '#ffffff', // white text for contrast
            },
            warning: {
              DEFAULT: '#f59e0b', // amber
              foreground: '#ffffff', // white text for contrast
            },
            danger: {
              DEFAULT: '#ef4444', // bright red
              foreground: '#ffffff', // white text for contrast
            },
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: '#09090b',
              foreground: '#ffffff',
            },
            default: {
              DEFAULT: '#1e293b', // neutral dark blue-gray
              foreground: '#f1f5f9', // light grayish-blue for contrast
            },
            primary: {
              DEFAULT: '#0e7490', // background
              foreground: '#ffffff', // light text for contrast
            },
            secondary: {
              DEFAULT: '#164e63', // deeper teal shade
              foreground: '#e0f2f1', // soft light teal
            },
            success: {
              DEFAULT: '#16a34a', // vibrant green
              foreground: '#f0fdf4', // soft greenish-white
            },
            warning: {
              DEFAULT: '#ca8a04', // golden yellow
              foreground: '#fff7ed', // very light cream
            },
            danger: {
              DEFAULT: '#dc2626', // bright red
              foreground: '#fef2f2', // pale pinkish-white
            },
          },
        },
      },
    }),
  ],
} satisfies Config

'use client'
import { extendVariants, Button } from '@nextui-org/react'

export const SubmitButton = extendVariants(Button, {
  variants: {
    color: {
      cyan: 'bg-cyan-500 text-white',
      orange: 'bg-amber-500 text-white',
      violet: 'bg-violet-500 text-white',
      indigo: 'bg-indigo-500 text-white',
    },
    isDisabled: {
      true: 'bg-current-[300] text-gray-500 opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px2 min-w-12 h-6 text-tiny gap-1 rounded-sm',
      md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-md',
      lg: 'px-8 min-w-28 h-14 text-large gap-4 rounded-lg',
      xl: 'px-12 min-w-36 h-16 text-xl gap-6 rounded-xl',
    },
    font: {
      sans: 'font-geist-sans',
      mono: 'font-geist-mono',
    },
    sizes: {
      small: 'text-small font-semibold uppercase',
      medium: 'text-medium font-semibold uppercase',
      large: 'text-large font-semibold uppercase',
    },
    radius: {
      small: '4px',
      medium: '8px',
      large: '48px',
      full: '9999px',
    },
  },
  defaultVariants: {
    color: 'cyan',
    size: 'xl',
    sizes: 'large',
    rounded: 'lg',
  },
  compoundVariants: [
    {
      color: 'orange',
      size: 'lg',
      styles: 'hover:bg-orange-600',
      rounded: 'md',
    },
    {
      color: 'violet',
      size: 'lg',
      styles: 'hover:bg-violet-600',
      rounded: 'md',
    },
  ],
})

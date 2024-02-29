import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
 content: [
  'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  'src/components/**/*.{js,ts,jsx,tsx,mdx}',
  'src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  'src/app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
  },
 },
 darkMode: 'class',
 plugins: [addVariablesForColors, nextui()],
}
export default config

function addVariablesForColors({ addBase, theme }: any) {
 let allColors = flattenColorPalette(theme('colors'))
 let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

 addBase({
  ':root': newVars,
 })
}

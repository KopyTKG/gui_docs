# GUI Docs

TBD

### Base packages

```bash
npm i geist @heroicons/react @nextui-org/react @vercel/analytics @vercel/speed-insights eslint-config-next flag-icons framer-motion
```

### Dev packages

```bash
npm i -D eslint-config-prettier eslint-plugin-prettier postcss prettier tailwindcss autoprefixer sass
```

#### `.prettierrc`

```json
{
 "semi": false,
 "tabWidth": 1,
 "printWidth": 100,
 "singleQuote": true,
 "trailingComma": "all",
 "jsxBracketSameLine": true
}
```

#### `.eslintrc.json`

```json
{
 "env": {
  "browser": true,
  "es2021": true
 },
 "extends": [
  "next/core-web-vitals",
  "plugin:react/recommended",
  "plugin:react/jsx-runtime",
  "plugin:react-hooks/recommended",
  "eslint:recommended",
  "plugin:prettier/recommended"
 ],
 "rules": {}
}
```

#### `tailwind.config.js`

```js
import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {},
 },
 darkMode: 'class',
 plugins: [nextui()],
}
```

#### `providers.tsx`

```ts
'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
 return <NextUIProvider>{children}</NextUIProvider>
}
```

#### `layout.tsx`

```ts
import './global.css'
import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
 title: 'MovieDB',
 description: 'Database of my plex library',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <main className="min-h-screen h-max dark text-foreground bg-background">
     {children}
    </main>
    <Analytics />
    <SpeedInsights />
   </body>
  </html>
 )
}
```

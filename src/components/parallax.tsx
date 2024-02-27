'use client'
import { HeroParallax } from './ui/hero-parallax'
export default function TestParallax() {
 return <HeroParallax products={products} />
}

export const products = [
 {
  title: 'Moonbeam',
  link: 'https://movies.thekrew.app',
  thumbnail: '/sites/movies.png',
 },
]

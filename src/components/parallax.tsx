'use client'
import { HeroParallax } from './ui/hero-parallax'
export default function DocumentationParallax() {
 return <HeroParallax products={products} />
}

export const products = [
 {
  title: 'MovieDB',
  link: 'https://movies.thekrew.app',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
 {
  title: 'GUI Guide',
  link: process.env.NEXT_PUBLIC_BASE_URL + '/docs/GUI',
  thumbnail: '/sites/movies.png',
 },
]

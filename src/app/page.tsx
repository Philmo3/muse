import { Hero } from '@/components/hero'
import { Sections } from '@/components/sections';
import './page.scss'

export default function Home() {
  return (
    <div>
      <Hero />
      <Sections />
    </div>
  );
}

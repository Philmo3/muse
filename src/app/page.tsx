import { Hero } from '@/components/hero'
import { TextImageSection } from '@/components/section'
import './page.scss'


export default function Home() {
  return (
    <>
      <Hero />
    <div>
      <TextImageSection  image='/dummy.jpg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='left'/>
    </div>
    <div>
      <TextImageSection  image='/dummy.jpg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='right'/>
    </div>
    </>
  );
}

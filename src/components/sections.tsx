'use client'

import { gsap } from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { TextImageSection } from './section';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


export const Sections = () => {

  useGSAP(() => {
    gsap.utils.toArray('.section').forEach((section) => {
        ScrollTrigger.create({
          trigger: section as gsap.DOMTarget,
          pin: true,
          pinSpacing: false,
          start: 'top top',
          scrub: 1,
        })
      })
  })

  return (
    <>
     <div className='section'>
        <TextImageSection title='Lorem Ipsum' image='/amelie.jpeg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='left'/>
      </div>
      <div className='section'>
        <TextImageSection title='Lorem Ipsum' image='/keesh.jpeg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='right'/>
      </div>
      <div className='section'>
        <TextImageSection title='Lorem Ipsum' image='/cath.jpeg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='left'/>
      </div>
      <div className='section'>
        <TextImageSection title='Lorem Ipsum' image='/julie.jpeg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, bibendum eu pretium in, egestas vitae elit. Sed feugiat eros arcu. Nulla facilisi. Pellentesque a viverra ante. Fusce eu malesuada metus. Maecenas ac iaculis leo. Nullam fringilla ligula accumsan nibh elementum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' textPosition='right'/>
      </div>
    </>
  )
}
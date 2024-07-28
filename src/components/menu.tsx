'use client'

import { useState } from "react"

export const Menu = () => {

  return (
    <>
      <div className="bg-dark w-full h-16 fixed z-50 top-0 left-0 flex justify-between tablet:justify-normal">
        <img className="h-16" src="/muse_logo.jpeg" alt="logo" />
        <div className="hidden tablet:flex self-center justify-items-center w-full mx-auto">
          <Inline />
        </div>
        <div className="block tablet:hidden">
          <Burger />
        </div>
      </div>
    </>
  )
}

const Inline = () => (
  <div className="w-full flex justify-center gap-4">
    <a href="/" className="p-2 text-white">Acceuil</a>
    <a href="/about" className="p-2 text-white">A propos</a>
    <a href="/equipe" className="p-2 text-white">Equipe</a>
  </div>
)

const Burger = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="relative">
      <div className="h-12 w-12 p-1 flex flex-col justify-around cursor-pointer" 
      onClick={() => { setIsActive(!isActive) }}>
        <div className={"h-[2px] w-full bg-white transition-all duration-300 " + (isActive ? "rotate-45 translate-y-3" : "")}></div>
        <div className={"h-[2px] w-full bg-white transition-all duration-300 " + (isActive ? "opacity-0" : "opacity-100")}></div>
        <div className={"h-[2px] w-full bg-white transition-all duration-300 " + (isActive ? "-rotate-45 -translate-y-4" : "")}></div>
      </div>
      <div className={"absolute -bottom-20 bg-dark flex flex-col w-32 transition-all duration-300 " + (isActive ? "right-0" : "-right-32" )}>
        <a href="/about" className="p-2 text-white">A propos</a>
        <a href="/equipe" className="p-2 text-white">Equipe</a>
      </div>
    </div>
  )
}
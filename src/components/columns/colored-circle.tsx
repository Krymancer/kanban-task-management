"use client";

import { useEffect, useState } from "react";

export function ColoredCircle() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null;


  const colors = 3;
  const randomColor = Math.floor(Math.random() * colors);

  switch (randomColor) {
    case 0:
      return <div className='rounded-full bg-[#8471F2] h-4 w-4'></div>;
    case 1:
      return <div className='rounded-full bg-[#67E2AE] h-4 w-4'></div>;
    case 2:
      return <div className='rounded-full bg-[#49C4E5] h-4 w-4'></div>;
    default:
      return <div className='rounded-full bg-red h-4 w-4'></div>;
  }
}
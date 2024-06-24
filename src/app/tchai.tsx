"use client"
import React from 'react'
import Providers from "@/components/Providers";
import { useRouter } from "next/navigation";

function Tchai({children} : any) {
  return (
      <Providers>
        {children}
      </Providers>
  )
}

export default Tchai
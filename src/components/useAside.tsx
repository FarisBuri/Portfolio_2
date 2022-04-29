import React from 'react'
import { useState } from 'react'

export function useAside(props:any) {
    let [aside,setAside]  = useState(props);
    console.log("use",aside);
  return (
    <div>
      
    </div>
  )
}


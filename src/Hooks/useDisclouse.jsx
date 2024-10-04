import React,{useState} from 'react'

export default function useDisclouse() {
    const [isOpen,setOpen]=useState(false)

    const onOpen=()=>{
        setOpen(true)
    }
    const onClose=()=>{
        setOpen(false)
    }
  return{onClose,onOpen,isOpen}

  
}

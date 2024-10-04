import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'
const Modal=({onClose,isOpen,children})=> {
  return createPortal(
    <>
        {isOpen && (
        <>
        <div className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4 '>
            <div className='flex justify-end'>
            <AiOutlineClose   className='self-end text-2xl absolute text-black'/>
            </div>  
            {children}    
              
        </div>
        <div onClick={onClose} className=' absolute top-0 z-40 h-screen w-screen backdrop-blur' />
        </>
    )}

    </>
    ,document.getElementById("modal-root")
  )
}

export default Modal

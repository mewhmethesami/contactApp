import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import {db} from '../config/firebase'
import {addDoc,collection, deleteDoc,doc} from "firebase/firestore"
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from '../Hooks/useDisclouse';
import { toast } from 'react-toastify';
export default function ContactCard  ({contact}) {
  const deletContact=async(id)=>{
    try{
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact deleted ")
    }
    catch(err){

    }
  }
  const {isOpen,onClose,onOpen}=useDisclouse();

  return (
    <div>
          <div key={contact.id} className=' rounded-lg p-2 bg-yellow-300 flex justify-between items-center'>
            <div className='flex gap-2'>
              <IoPersonCircle className='text-orange-400 text-4xl' />
              <div className=''>
                  <h2 className='font-medium'>{contact.name}</h2>
                  <p className='text-sm'>{contact.email}</p>
              </div>
            </div>
            <div className='flex text-3xl'>
              <MdDelete onClick={()=>deletContact(contact.id)} className='text-orange-500' />
              <CiEdit onClick={onOpen} className='cursor-pointer'/>
            </div>
          </div>      
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

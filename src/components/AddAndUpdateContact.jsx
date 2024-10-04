import React from 'react'
import Modal from './Modal'
import {Field, Form,Formik} from 'formik'
import {db} from '../config/firebase'
import {addDoc,collection, updateDoc,doc} from "firebase/firestore"
import { toast } from 'react-toastify'
function AddAndUpdateContact({isOpen,onClose,isUpdate,contact}) {
    const addContact=async(contact)=>{
        try{
            const contactRef=collection(db,"contacts")
            await addDoc(contactRef,contact)
            onClose()
            toast.success("Add succedfully")

        }
        catch(err){

        }

    }
    const updateContact=async(contact,id)=>{
        try{
            const contactRef=doc(db,"contacts",id)
            await updateDoc(contactRef,contact)
            onClose()
            toast.success("Update succedfully")

        }
        catch(err){

        }
    }


  return (
    <div>
      <Modal
        isOpen={isOpen} 
        onClose={onClose}
        >
            <Formik
            initialValues={ 
            isUpdate?{
                name:contact.name,
                email:contact.email,
            }
            :
            {
                name:"",
                email:"",
            }

        }
            onSubmit={(value)=>{
                isUpdate?
                updateContact(value,contact.id)
                :
                addContact(value)
                
            }}
            >

              <Form className='text-black flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <Field typr="text" name="name" className='border h-10 ' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>email</label>
                    <Field typr="email" name="email" className='border h-10 ' />
                </div>
                <button className='border bg-orange-600 px-3  py-2 self-end'>{isUpdate ? "Update" :"Add"} Contact</button>
                
              </Form>

            </Formik>
            
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact

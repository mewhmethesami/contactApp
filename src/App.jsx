import './App.css';
import { CiSearch } from "react-icons/ci";
import Navbar from './components/Navbar'
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import {collection,getDocs, onSnapshot} from "firebase/firestore"
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclouse from './Hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const[contacts,setContacts]=useState([])
    const {isOpen,onClose,onOpen}=useDisclouse();

    useEffect(()=>{
        const getContacys=async ()=>{
            try{
                const contactsRef=collection(db,"contacts")
                

                onSnapshot(contactsRef,(snapshot)=>{
                    const contactList=snapshot.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                })
                
                setContacts(contactList)
                return contactList
                })
                
            }
            catch(err){
                console.log(err)
            }      
        
        }
        getContacys()
    },[])










    return (
        <>
        <div className="max-w-[370px] mx-auto px-4">
            <Navbar/>
            <div className='flex gap-2 relative items-center'>
                <CiSearch className='text-white text-3xl ml-1 absolute' />
                <input type="text" className='flex-grow  border bg-transparent border-white
                 h-10 text-white pl-9' 
                 />

                <FaCirclePlus onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
                
            </div>
            <div className='mt-4 flex flex-col gap-3'>
                {contacts.map((contact=>(
                    <ContactCard key={contact.id} contact={contact}/>

                )))}
            </div>
        </div>
            <AddAndUpdateContact 
            onClose={onClose}
            isOpen={isOpen}
            />
            <ToastContainer
            position='bottom-center'/>
        
        </>
    );
}

export default App;
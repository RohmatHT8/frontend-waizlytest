'use client'
import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'
const AddButton = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='pt-2 pe-3'>
      <button className='btn btn-warning w-full btn-sm' 
              onClick={() => setOpenModal(true)}><AiOutlinePlus/></button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}

export default AddButton
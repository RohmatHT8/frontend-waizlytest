'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'
import { addTodo, deleteTodo, editTodo } from '../../../api'
import { useRouter } from 'next/navigation'

const Modal = ({ openModal, setOpenModal, data = null, id = null, state = 'create' }) => {
    const router = useRouter()
    const [input, setInput] = useState({
        name: {
            data: ''
        },
        description: {
            data: ''
        },
        type: {
            data: 'Ordinary',
        }
    })

    if (state == 'update') {
        useEffect(() => {
            setInput(data)
        }, [])
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: {
                data: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (state !== 'delete') {
            const data = {
                name: input.name.data,
                description: input.description.data,
                type: input.type.data
            }
            if (state === 'update') {
                await editTodo(data, id)
            } else {
                await addTodo(data)
            }
        } else {
            await deleteTodo(id)
        }
        setOpenModal(false)
        router.refresh()
        setInput({
            name: {
                data: ''
            },
            description: {
                data: ''
            },
            type: {
                data: 'Ordinary'
            }
        })
    }

    if (state === 'delete') {
        return (
            <dialog id="my_modal_3" className={`modal bg-gray-950/[0.50] ${openModal ? 'modal-open' : ''}`}>
                <form method="dialog" className="modal-box w-56 text-center">
                    <MdOutlineErrorOutline className='mx-auto text-7xl text-red-400 mb-0' />
                    <p className="py-4">Are You Sure</p>
                    <div className='gap-2 text-center mx-auto'>

                        <button className='btn btn-sm btn-error me-3'
                            onClick={handleSubmit}>Delete</button>

                        <button className='btn btn-sm btn-cyan'
                            onClick={() => setOpenModal(false)}
                        >Close</button>
                    </div>
                </form>
            </dialog>
        )
    }
    return (
        <dialog id="my_modal_3" className={`modal bg-gray-950/[0.50] ${openModal ? 'modal-open' : ''}`}>
            <form method="dialog"
                className="modal-box"
                onSubmit={handleSubmit}>
                <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => setOpenModal(false)}
                >✕
                </span>
                <h3 className='font-bold text-lg'>Add New Task</h3>
                <div className='modal-action mb-3'>
                    <input
                        name='name'
                        type='text'
                        required
                        placeholder='Title'
                        className='input input-bordered w-full'
                        value={input.name.data}
                        onChange={handleChange}
                    />
                </div>
                <div className='modal-action mb-3'>
                    <textarea className="textarea textarea-bordered w-full"
                        name='description'
                        placeholder="description"
                        required
                        defaultValue={input.description.data}
                        onChange={handleChange}></textarea>
                </div>
                <button type='submit'
                    className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </dialog>
    )
}

export default Modal
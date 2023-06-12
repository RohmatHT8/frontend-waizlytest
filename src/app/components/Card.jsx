import React, { useState } from 'react'
import { MdDelete, MdEditSquare } from 'react-icons/md'
import { deleteTodo, editTodo, getTodo } from '../../../api'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
const Card = ({ task }) => {

    const router = useRouter()

    const [openModal, setOpenModal] = useState(false)
    const [state, setState] = useState('update')
    const [data, setData] = useState({})

    const handleEdit = async (id) => {
        setState('update')
        await getTodo(id)
            .then(res => {
                setData({
                    id: res.id,
                    name: {
                        data: res.name
                    },
                    description: {
                        data: res.description
                    },
                    type: {
                        data: res.type,
                    }
                })
            })

        setOpenModal(true)
    }

    const handleEditType = async (id, type) => {
        await editTodo({ ...task, type }, id)
        router.refresh()
    }

    const confirmation = async () => {
        setState('delete')
        setOpenModal(true)
    }
    return (
        <div className={`card card-compact w-60 ${task.type !== 'Done' ? 'bg-slate-200 shadow-md' : 'bg-blue-500'} mb-3 shadow-sm`}>
            <div className="card-body">
                <div className='flex gap-1'>
                    <button className={`badge badge-sm ${task.type === 'Urgent' ? 'badge-error text-red-800' : 'badge-danger'} font-bold hover:border-slate-200`}
                        onClick={() => handleEditType(task.id, 'Urgent')}>Urgent</button>
                    <button className={`badge badge-sm ${task.type === 'Ordinary' ? 'badge-info text-sky-900' : 'badge-danger'} font-bold hover:border-slate-200`}
                        onClick={() => handleEditType(task.id, 'Ordinary')}>Ordinary</button>
                    <button className={`badge badge-sm ${task.type === 'Done' ? 'badge-success text-green-900' : 'badge-danger'} font-bold hover:border-slate-200`}
                        onClick={() => handleEditType(task.id, 'Done')}>Done</button>
                </div>
                <h2 className="card-title">{task.name}</h2>
                <p className='text-sm'>{task.description}</p>
                {
                    openModal ?
                        <Modal openModal={openModal}
                            setOpenModal={setOpenModal}
                            data={data}
                            id={task.id}
                            state={state} /> : <></>
                }
                <div className="card-actions mt-3">
                    <div className='flex gap-2'>
                        {task.type === 'Done' ?
                            <MdDelete className='text-slate-800 hover:text-red-700'
                                size={20}
                                cursor={'pointer'}
                                onClick={() => confirmation(task.id)} /> :
                            <MdEditSquare className='text-gray-700 hover:text-blue-700'
                                size={20}
                                cursor={'pointer'}
                                onClick={() => handleEdit(task.id)} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
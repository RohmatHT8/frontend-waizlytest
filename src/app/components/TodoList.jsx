import React from 'react'
import Card from './Card'

export const TodoList = ({ tasks }) => {
    return (
        <>
            {

                tasks.length < 1 ?
                    <div className='border border-blue-300 p-4 w-full text-center text-blue-300 font-bold rounded-md'>
                        Empty Data, Add Task
                    </div>
                    :
                    <div className="overflow-x-auto grid sm:grid-cols-3 grid-cols-2">
                        {
                            tasks.map((task, idx) => (
                                <Card key={idx} task={task} />
                            ))
                        }
                    </div>
            }
        </>
    )
}

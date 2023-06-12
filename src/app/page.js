'use client'
import { getAllTodos } from "../../api";
import AddButton from "./components/AddButton";
import { TodoList } from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos()
  return (
    <main className='max-w-3xl mx-auto mt-4'>
      <div className='my-5 flex flex-col gap-4 bg-blue-600 p-2 rounded-xl shadow-sm'>
        <div className="flex justify-between">
          <h1 className='text-2xl font-bold pt-2 ps-3 text-white'>MY TODO LIST</h1>
          <AddButton />
        </div>
        <TodoList tasks={tasks} />
      </div>
    </main>
  )
}

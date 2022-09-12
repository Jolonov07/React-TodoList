import React from "react"
import cls from './ToDoItem.module.scss'
import { 
   TrashIcon as Delete, 
   PencilIcon as Edit, 
   CheckCircleIcon as Check } from "@heroicons/react/outline"

const ToDoItem = ({ 
   id, 
   title, 
   completed,
   deleteTodo, 
   patchTodo,
   completedItem,
   }) => {
   return(
      <div className={cls.root}>
         <h1>{title}</h1>
         <div className={cls.icons}>
            <div>
               <Delete onClick={() => deleteTodo(id)}/>
            </div>
            <div>
               <Edit onClick={() => patchTodo(id)} />
            </div>
            <div>
               <Check onClick={() => completedItem(id)} />
            </div>
         </div>
      </div>
   )
}

export default ToDoItem
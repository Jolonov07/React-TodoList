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
   deleteItem, 
   patchItem,
   }) => {
   return(
      <div className={cls.root}>
         <h1>{title}</h1>
         <div className={cls.icons}>
            <div>
               <Delete onClick={() => deleteItem(id)}/>
            </div>
            <div>
               <Edit onClick={() => patchItem(id)} />
            </div>
            <div>
               <Check />
            </div>
         </div>
      </div>
   )
}

export default ToDoItem
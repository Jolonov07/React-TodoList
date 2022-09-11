import { axiosRequeat } from "../../../configs"

export const get = () => {
   return axiosRequeat.get('/todos.json')
}

export const post = (data) => {
   return axiosRequeat.post('/todos.json', data)
}

export const remove = (id) => {
   return axiosRequeat.delete(`/todos/${id}.json`)
} 
 
export const favorites = (data) => {
   return axiosRequeat.get('/fill.json', data)
}
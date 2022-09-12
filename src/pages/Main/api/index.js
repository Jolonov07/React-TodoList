import { axiosRequest } from "../../../configs"

export const get = () => {
   return axiosRequest.get('/todos.json')
}

export const post = (data) => {
   return axiosRequest.post('/todos.json', data)
}

export const remove = (id) => {  
   return axiosRequest.delete(`/todos/${id}.json`)
}
export const patch = (id) => {
   return axiosRequest.patch(`/todos/${id}.json`)
}
 
export const favorites = (data) => {
   return axiosRequest.get('/fill.json', data)
}
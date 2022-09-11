import axios from 'axios'

const firebaseConfig = {
   apiKey: "AIzaSyBt9eYGEtElqiwTGnAts970M0HzQxGMAvk",
   authDomain: "my-todo-6a5d4.firebaseapp.com",
   databaseURL: "https://my-todo-6a5d4-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "my-todo-6a5d4",
   storageBucket: "my-todo-6a5d4.appspot.com",
   messagingSenderId: "486662686994",
   appId: "1:486662686994:web:45d64bf247785e5366cbcb"
}
 
export const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`
 
export const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
 
export const usersDB = (key) => `https://my-todo-6a5d4-default-rtdb.asia-southeast1.firebasedatabase.app${key}`
 
export const request  = (endpoint) => `https://my-todo-6a5d4-default-rtdb.asia-southeast1.firebasedatabase.app${endpoint}`

export const crud = (id) => `https://my-todo-6a5d4-default-rtdb.asia-southeast1.firebasedatabase.app${id}`

export const apiUrl = 'https://my-todo-6a5d4-default-rtdb.asia-southeast1.firebasedatabase.app'

export const axiosRequeat = axios.create({ baseURL: apiUrl })
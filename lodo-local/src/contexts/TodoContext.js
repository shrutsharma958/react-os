import React, { createContext, useContext } from "react";

export const TodoContext=createContext({
    tasks:[
        {
            msg:"task1",
            id:1,
            complete:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    completeTodo:(id)=>{},
    editTodo:(id,todo)=>{}

})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}
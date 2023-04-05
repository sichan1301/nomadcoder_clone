import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Course } from "./dummyData/data";
import { courseType } from "./dummyData/dataType";

interface IState {
	price?:string,
	level?:string,
	tech?:string,
  course:courseType[]
}

const nomadCoder = createSlice({
	name:"nomadCoderReducer",
	
	initialState:{
    course:Course,
    price:undefined,
    level:undefined,
    tech:undefined
	},

	reducers:{
		PRICE:(state:IState,action) => {
      state.price = action.payload
      if(state.level === undefined && state.price === undefined && state.tech === undefined){
        state.course = Course
      }else if(state.level !== undefined && state.price !== undefined ){
        state.course = Course.filter(item => item.level === state.level && item.price === state.price)
      }
      else{
        state.course = Course.filter(item => item.level === state.level || item.price === state.price)
      }
		},
		LEVEL:(state:IState,action) => {
      state.level = action.payload
      if(state.level === undefined && state.price === undefined && state.tech === undefined){
        state.course = Course
      }else if(state.level !== undefined && state.price !== undefined ){
        state.course = Course.filter(item => item.level === state.level && item.price === state.price )
      }
      else{
        state.course = Course.filter(item => item.level === state.level || item.price === state.price )
      }
		},
		TECH:(state:IState,action) => {
      state.tech = action.payload
		}
}})

export const store = configureStore({
    reducer : nomadCoder.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {PRICE,LEVEL,TECH} = nomadCoder.actions

export default nomadCoder

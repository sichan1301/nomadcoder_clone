import { createSlice,configureStore } from "@reduxjs/toolkit";
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
		},
		LEVEL:(state:IState,action) => {
      state.level = action.payload
		},
		TECH:(state:IState,action) => {
      state.tech = action.payload
		},
    FILTER:(state) => {
      if(state.level === undefined && state.price === undefined && state.tech === undefined){
        state.course = Course
      }
      else if(state.level !== undefined && state.price !== undefined && state.tech !== undefined ){
        state.course = Course.filter(item => (item.level === state.level) && (item.price === state.price) && (item.tech?.find(item => item === state.tech)!== undefined))
      }
      else{
        if(state.price === undefined){
          state.course = Course.filter(item => item.level === state.level && item.tech?.find(item => item === state.tech)!== undefined)
        }else if(state.level === undefined){
          state.course = Course.filter(item => item.price === state.price && item.tech?.find(item => item === state.tech)!== undefined)
        }else if(state.tech === undefined){
          state.course = Course.filter(item => item.price === state.price && item.level === state.level)
        }
        state.course = Course.filter(item => item.level === state.level || item.price === state.price || item.tech?.find(item => item === state.tech)!== undefined)
      }

    }
}})

export const store = configureStore({
    reducer : nomadCoder.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {PRICE,LEVEL,TECH, FILTER} = nomadCoder.actions

export default nomadCoder

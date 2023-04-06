import { createSlice,configureStore } from "@reduxjs/toolkit";
import { Course } from "./dummyData/data";
import { courseType } from "./dummyData/dataType";

interface IState {
  course:courseType[],
	price:string,
	level:string,
	tech:string,
}

const nomadCoder = createSlice({
	name:"nomadCoderReducer",
	
	initialState:{
    course:Course,
    price:"",
    level:"",
    tech:"",
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
      // if(state.level === "" && state.price === "" && state.tech === ""){
      //   state.course = Course
      // }
      // else if(state.level !== "" && state.price === "" && state.tech === ""){
      //   state.course = Course.filter(item => item.level === state.level)
      // }
      // else if(state.level !== "" && state.price !== "" && state.tech === ""){
      //   state.course = Course.filter(item => item.level === state.level && item.price === state.price)
      // }
      // else if(state.level === "" && state.price !== "" && state.tech !== ""){
      //   state.course = Course.filter(item => item.price === state.price && item.tech?.includes(state.tech))
      // }
      // else if(state.level === "" && state.price === "" && state.tech !== ""){
      //   state.course = Course.filter(item => item.tech?.includes(state.tech))
      // }
      // else if(state.level === "" && state.price !== "" && state.tech === ""){
      //   state.course = Course.filter(item => item.price === state.price)
      // }
      // else if(state.level !== "" && state.price === "" && state.tech !== ""){
      //   state.course = Course.filter(item => item.level === state.level && item.tech?.includes(state.tech))
      // }
      // else{
      //   state.course = Course.filter(item => state.level === "" && item.price === state.price && item.tech?.includes(state.tech))
      // }
                  
      state.course = Course.filter(item =>          
        (state.price === "" ? true : item.price === state.price) && (state.level === "" ? true : item.level === state.level) && (state.tech === "" ? true: item.tech?.includes(state.tech)) 
      )
    }
}})

export const store = configureStore({
    reducer : nomadCoder.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {PRICE,LEVEL,TECH, FILTER} = nomadCoder.actions

export default nomadCoder

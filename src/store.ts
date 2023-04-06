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
		OPTION:(state:IState,action) => {
      action.payload.price !== undefined && (state.price = action.payload.price)
      action.payload.level !== undefined && (state.level = action.payload.level) 
      action.payload.tech !== undefined && (state.tech = action.payload.tech)      
      state.course = Course.filter(item => (state.price === "" ? true : item.price === state.price) && (state.level === "" ? true : item.level === state.level) && (state.tech === "" ? true: item.tech?.includes(state.tech)) )
		}
  }
})

export const store = configureStore({
    reducer : nomadCoder.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {OPTION} = nomadCoder.actions

export default nomadCoder

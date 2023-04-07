import { createSlice,configureStore, current } from "@reduxjs/toolkit";
import { Course } from "./dummyData/data";

const nomadCoder = createSlice({
	name:"nomadCoderReducer",
	
	initialState:{
    course:Course,
    price:"",
    level:"",
    tech:"",
	},
  
	reducers:{
		FILTER:(state,action) => {
      // state = {...state,[Object.keys(action.payload)[0]]:Object.values(action.payload)[0]}
      state = {...state, ...action.payload}
      state.course = Course.filter(item => (state.price === "" ? true : item.price === state.price) && (state.level === "" ? true : item.level === state.level) && (state.tech === "" ? true: item.tech?.includes(state.tech)))
      return state
    }
  }
})

export const store = configureStore({
    reducer : nomadCoder.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {FILTER} = nomadCoder.actions

export default nomadCoder

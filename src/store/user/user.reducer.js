import { createSlice } from "@reduxjs/toolkit"

// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
}

// will replace action types, action and reducer from redux
export const userSlice = createSlice({
    name: "user", // namespace for the action types (meaning we dont need to have action types anymore.)
    initialState: INITIAL_STATE,
    reducers: {
        // replaces the switch case
        // defining action // shorthand for setCurrentUser: () => {}
        setCurrentUser(state, action) {
            // this isnt a mutation, still making a brand new object
            // it looks like its being mutated but its using a built-in lib called Immer
            state.currentUser = action.payload
        },
    },
})

// extract the action from createSlice
export const { setCurrentUser } = userSlice.actions

// extract the reducer from createSlice
export const userReducer = userSlice.reducer

// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

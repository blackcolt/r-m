import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {} as Record<string, number>,
  reducers: {
    setScore: (state, action) => {
        state[action.payload.id] = action.payload.score
    },
  },
})

// Action creators are generated for each case reducer function
export const { setScore } = favoriteSlice.actions

export default favoriteSlice.reducer
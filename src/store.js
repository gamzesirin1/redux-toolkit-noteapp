import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './redux/noteSlice'

export default configureStore({
	reducer: {
		notes: notesReducer
	}
})

import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
	name: 'notes',
	initialState: [], // başlangıç değeri
	reducers: {
		// state'i değiştiren fonksiyonlar
		addNote: (state, action) => {
			state.push(action.payload)
		},
		deleteNote: (state, action) => {
			return state.filter((note) => note.id !== action.payload)
		}
	}
})

export const { addNote, deleteNote } = noteSlice.actions // actionları export et

export default noteSlice.reducer

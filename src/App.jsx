import './App.css'

import { addNote, deleteNote } from './redux/noteSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'

function App() {
	const [note, setNote] = useState('')
	const dispatch = useDispatch() // useDispatch hook'u ile store'a erişim sağlanır
	const notes = useSelector((state) => state.notes) // useSelector hook'u ile store'daki state'e erişim sağlanır

	const handleAddNote = () => {
		if (note.trim() === '') return
		dispatch(
			addNote({
				id: Date.now(),
				text: note
			})
		)
		setNote('')
	}

	const handleDeleteNote = (id) => {
		dispatch(deleteNote(id))
	}

	return (
		<div className="App">
			<h1>Not Defterim</h1>
			<div className="form">
				<input type="text" placeholder="Not girin..." value={note} onChange={(e) => setNote(e.target.value)} />
				<button onClick={handleAddNote}>Ekle</button>

				<div className="notes">
					{notes.map((note) => (
						<div key={note.id} className="note">
							<span>{note.text}</span>
							<button onClick={() => handleDeleteNote(note.id)}>Sil</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App

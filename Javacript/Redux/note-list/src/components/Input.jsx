import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'
import { searchNot } from '../redux/notes/notesSlice'

function Input() {
const dispatch = useDispatch();
const [search, setSearch] = useState('');

useEffect(() => {
  dispatch (searchNot(search))
}, [search])

  return (
    <div className='mt-3'>
      < TextField type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
      placeholder='Search...' 
      className='border-2 rounded-md pl-2 border-cyan-400 w-1/2 md:w-4/3' />
    </div>
  )
}

export default Input
import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addnot, colorChange } from '../redux/notes/notesSlice'

const Textarea = () => {
  const [addText, setAddText] = useState({ title: '', color:'bg-black' })
  const dispatch = useDispatch();

  const addstate = () => {
    dispatch(addnot(addText));
  }
  return (
    <div className='w-11/12 md:w-1/2 mx-auto mt-4  ' >
      <div className=' w-11/12 md:w-full mx-auto'  >
        
        <TextField
          className='w-full  '
          id="outlined-multiline-flexible"
          label="Enter Your Code Here..."
          multiline 
          onChange={(e) => setAddText({...addText,title:e.target.value})}
          rows={6}
        />
      </div>
      <div className='mt-2  flex justify-between' >
        <div>
          <button   onClick={()=>setAddText({...addText,color:'bg-black'})}  className='bg-black mr-1  p-4 rounded-full' >
          </button>
          <button  onClick={()=>setAddText({...addText,color:'bg-red-600'})} className='bg-red-600 mr-1  p-4 rounded-full' >
          </button>
          <button  onClick={()=>setAddText({...addText,color:'bg-blue-900'})} className='bg-blue-900  mr-1 p-4 rounded-full' >
          </button>
          <button onClick={()=>setAddText({...addText,color:'bg-amber-900'})}  className='bg-amber-900 mr-1  p-4 rounded-full' >
          </button>
        </div>
        <div>
          <Button variant="contained" onClick={addstate} >Add</Button>
        </div>

      </div>


    </div>

  )
}

export default Textarea
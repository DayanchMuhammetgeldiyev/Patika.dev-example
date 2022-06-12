import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {empty} from '../redux/notes/notesSlice'


const NoteList = () => {
  const filteredNot = useSelector(state => state.notes.filteredNot);
  const nots = useSelector(state => state.notes.not);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(empty(nots))

  },[nots])

    console.log(filteredNot);
  return (
    <div className='w-11/12 md:w-1/2 mx-auto flex md:justify-start justify-center flex-row items-stretch flex-wrap   mt-1 ' >
      {
         filteredNot.map((item, key) => (
          <div key={key} className='md:w-3/12 mb-2   w-11/12'>
          <div  className={` ${item.color}  border rounded-md h-full  m-2 `} >
              <p className='text-xl font-mono  break-words text-white' >{item.title}</p>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default NoteList
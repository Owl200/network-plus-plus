import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleAdd, changeName, changeOcupation, changeLocation, changeMetAt, changeCompany } from './addPersonSlice'
import { addToArray, changeIsEditable } from '../person/personSlice'


export function AddPerson() {
  const addPerson = useSelector(state => state.addPerson)
  const person = useSelector(state => state.person)
  const dispatch = useDispatch()

  const handleClick = _ => dispatch(toggleAdd())

  const handleChange = e => { 
      let value = e.target.value
      switch(e.target.name){
            case 'name':
                dispatch(changeName(value));
                break;
            case 'ocupation':
                dispatch(changeOcupation(value));
                break;
            case 'location':
                dispatch(changeLocation(value));
                break;
            case 'metAt':
                dispatch(changeMetAt(value));
                break;
            case 'company':
                dispatch(changeCompany(value));
                break;
            default:
                break;
      }
      dispatch()
    }

    const handleSave = _ => {
        dispatch(toggleAdd())
        dispatch(addToArray(addPerson))
        dispatch(changeIsEditable(person.length))
    }

    const handleFocus = e => e.target.select()
  

  return (
    <div>
        { addPerson.isEditable || <button onClick={handleClick}>Add a Person</button>}
        {addPerson.isEditable && (
            <div key={`add-person-div`}>
                <input placeholder='name'  value={addPerson.name} className='add-person' name='name' onClick={handleFocus} onChange={handleChange}></input> 
                <input placeholder='ocupation'  value={addPerson.ocupation} className='add-person' name='ocupation' onClick={handleFocus} onChange={handleChange}></input>
                <input placeholder='location'  value={addPerson.location} className='add-person' name='location' onClick={handleFocus} onChange={handleChange}></input>
                <input placeholder='metAt'  value={addPerson.metAt} className='add-person' name='metAt' onClick={handleFocus} onChange={handleChange}></input>
                <input placeholder='company'  value={addPerson.company} className='add-person' name='company' onClick={handleFocus} onChange={handleChange}></input>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClick}>Cancel</button>
            </div>
        )}
    </div>
  )
}
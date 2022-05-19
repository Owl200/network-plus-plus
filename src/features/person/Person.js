import React from 'react'
import '../../Person.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeState, changeIsEditable, changeTemp, deletePerson } from './personSlice'

export function Person() {
    const person = useSelector(state => state.person)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let index = e.target.className
        dispatch(changeTemp( [name, index, value]))
    }

    const info = person.map( (element, index) => (
        element.isEditable ?
        (
            <div key={`edit-person${index}`} className='person-container'>
                <input placeholder={element.name}   className={index} name='name' onChange={handleChange}></input> 
                <input placeholder={element.ocupation}   className={index} name='ocupation' onChange={handleChange}></input>
                <input placeholder={element.location}   className={index} name='location' onChange={handleChange}></input>
                <input placeholder={element.metAt}   className={index} name='metAt' onChange={handleChange}></input>
                <input placeholder={element.company}   className={index} name='company' onChange={handleChange}></input>
                <button onClick={() => dispatch(changeState(index))}>Save</button>
                <button onClick={() => dispatch(changeIsEditable(index))}>Cancel</button>
            </div>
        ) :
        (
        <div key={`person${index}`} id={`person${index}`} className='person-container'>
            <button onClick={() => dispatch(changeIsEditable(index))}>Edit</button>
            <button onClick={() => dispatch(deletePerson(index))}>Delete person</button> 
            <h1>{element.name}</h1>
            <p>Ocupation: {element.ocupation}</p>
            <p>Location: {element.location}</p>
            <p>Met at: {element.metAt}</p>
            <p>Company: {element.company}</p>
            <p>Chats:</p>
            <textarea></textarea>
            <button>Add a chat</button>
        </div>
        )
    ))

    return (
        <>  
            {info}
        </>
    )
}
import React from 'react'
import '../../Person.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeState, changeIsEditable, changeTemp, deletePerson } from './personSlice'
import { Chat } from '../chat/Chat'
import img1 from '../../images/icons8-edit-96.png'
import img2 from '../../images/icons8-remove-96.png'



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
                {/* add value attribute to make it controlled input */}
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
            <div className='modify-person-container'>
                <button onClick={() => dispatch(changeIsEditable(index))}><img alt='edit person' className='modify-person-icon' src={img1} /></button>
                <button onClick={() => dispatch(deletePerson(index))}><img alt='delete person' className='modify-person-icon' src={img2} /></button> 
            </div>
            <h1>{element.name}</h1>
            <p>Ocupation: {element.ocupation}</p>
            <p>Location: {element.location}</p>
            <p>Met at: {element.metAt}</p>
            <p>Company: {element.company}</p>
            <p>Chats:</p>
            <Chat index={index}/>
        </div>
        )
    ))

    return (
        <>  
            {info}
        </>
    )
}
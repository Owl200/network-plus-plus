import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeOcupation, changeLocation, changeMetAt, changeCompany } from './personSlice'

export function Person() {
  const person = useSelector(state => state.person)
  console.log(person)
  const info = person.map( (element, index) => (
      <div>
        <h1>{element.name}</h1>
        <p>{element.ocupation}</p>
        <p>{element.location}</p>
        <p>{element.metAt}</p>
        <p>{element.company}</p>
      </div>
  ))

  return (
    <div>
      {info}
    </div>
  )
}
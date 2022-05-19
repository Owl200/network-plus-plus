import React from 'react'
import '../../Chat.css'
import { useSelector, useDispatch } from 'react-redux'
import { addChat, changeTemp, saveChat } from './chatSlice'


export  function Chat(props) {
    const index = props.index
    const chat = useSelector(state => state.chat)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let index = e.target.className
        dispatch(changeTemp( [name, index, value]))
    }

    const chatDate = chat[index].chatInfo.date.map((e, i) => <p className={`chat-${i}`} >{e}</p>)
    const chatContent = chat[index].chatInfo.content.map((e, i) => 
    (<p className={`chat-${i}`} >{e.length > 15 ? `${e.slice(0, 16)}...` : e}</p>))

  return (
    <>
        {chat[index].add ? 
        <div className={`chat-input`}>
            <input type='date' name='date' className={index} onChange={handleChange} />
            <textarea name='content' className={index} onChange={handleChange} />
            <button className={index} onClick={() => dispatch(saveChat(index))} >Save</button>
            <button onClick={() => dispatch(addChat(index)) }>Cancel</button>
        </div> :
        <div className={`add-chat`}>
            {chat[index].chatInfo.date.length > 0 && 
            <div className='chat-content-container'>
                <div>{chatDate}</div> 
                <div>{chatContent}</div>
            </div>}
            <button onClick={() => dispatch(addChat(index))}>Add a chat</button>
        </div>
        }
    </>
  )
}

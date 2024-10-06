import React from 'react'
import './message-box.css'
import Message from '../message/Message'
import Input from '../input/Input'
const users = [
    {
        name: "name1",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        name: "name2",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        name: "name3",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
]

const messages = []
const MessageBox = () => {
    const user1 =     {
        name: "name1",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
    const user2 =     {
        name: "name2",
        message: "Hello"
    }
  return (
    <>
        <div className='main-container'>
            <Message user={user1}/>
            <Message user={user2}/>
            <Message user={user1}/>
            <Input messages={messages}/>
        </div>
    </>
  )
}

export default MessageBox
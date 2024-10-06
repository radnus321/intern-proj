import React from 'react'
import './message.css'
const Message = (user) => {
  return (
    <>
        <div className='message-container'>
            <div className="profile-image"></div>
            <div className="text-component">
                <div className="body">
                    <div className="message-content">{user.user.message}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Message
import React from 'react'

const Notification = ({ message }) => {
  
  if(message === null)
    return null

  if((message.content === '' && message.status === ''))
    return null
  
  const notificationStyle = { 
    color: message.status ===`success`?'green':'red',
    background: 'lightgrey',
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
}

  return (
    <div style={notificationStyle}>
      {message.content}
    </div>
  )
}

export default Notification
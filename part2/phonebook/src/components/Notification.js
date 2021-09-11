import React from 'react'

const Notification = ({ message }) => {
  


    const notificationStyle = { 
        color: 'green',
        background: 'lightgrey',
        fontSize: 16,
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification
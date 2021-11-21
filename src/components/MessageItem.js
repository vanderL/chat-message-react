import React, {useMemo} from 'react';
import './MessageItem.css'

function MessageItem({ data, user }) {
    const userLogado = useMemo(()=>{
       if (user.id === data.author) {
           return true
       } else {
           return false
       }
    },[user, data])

    return (
        <div 
            className="messageLine"
            style={{justifyContent: userLogado ? 'flex-end' : 'flex-start'}}
        >
            <div 
                className="messageItem"
                style={{
                    backgroundColor: userLogado? '#dcf8c6' : '#fff'
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    ) 
}

export default MessageItem;
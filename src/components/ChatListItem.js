import React from 'react';
import './ChatListItem.css'


export default ({data}) => {
    return (
        <div className="chatListItem">
            <img 
                className="chatListItem--avatar" 
                src="https://www.w3schools.com/howto/img_avatar2.png" alt="" 
            />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Vander</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo booom? Meu grande amigooooo? Vem q horas?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
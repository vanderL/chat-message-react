import React, {useState} from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function NewChat ({show, setShow, user, chatList}) {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'José'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Ronaldo'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Pele'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Zidane'},
    ])

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div className="newChat--backButton" onClick={handleClose}>
                    <ArrowBackIcon />
                </div>
                <div className="newChat--headTitle">
                    nova conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemAvatar" src={item.avatar} alt="" />
                        <div className="newChat--itemName">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;
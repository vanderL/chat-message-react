import React, {useState, useEffect} from 'react';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';


function App() {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Vander', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'João', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Pedro', image: 'https://www.w3schools.com/howto/img_avatar2.png'},

  ]);
  const [activeChat, setActiveChat] =  useState({});
  const [user, setUser] =  useState({
    id: 1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Vander Lima'
  });

  return (
    <div className="App">
     <div className="sidebar">

        <header>
          <img
            className="header--avatar" 
            src={user.avatar} alt="" 
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon  style={{color: '#919191'}}/>
            </div>
          </div>    
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Pesquisar ou iniciar uma nova conversa"/>
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === item.chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined ? (
          <ChatWindow 
            user={user}
          />
        ) : (
          <ChatIntro />
        )}
       
      </div>
    </div>
  );
}

export default App;

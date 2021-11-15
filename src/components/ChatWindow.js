import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './ChatWindow.css';


function ChatWindow() {
  return (
      <div className="chatWindow">
           <div className="chatWindow--header">

            <div className="chatWindow--headerInfo">
              <img 
                className="chatWindow--avatar" 
                src="https://www.w3schools.com/howto/img_avatar2.png" 
                alt=""
              />
              <div className="chatWindow--name">Vander </div>
            </div>
            <div className="chatWindow--headerButtons">

              <div className="chatWindow--btn">
                <SearchIcon  style={{color: '#919191'}}/>
              </div>
              <div className="chatWindow--btn">
                <AttachFileIcon  style={{color: '#919191'}}/>
              </div>
              <div className="chatWindow--btn">
                <MoreVertIcon  style={{color: '#919191'}}/>
              </div>

            </div>

           </div>
           <div className="chatWindow--body"></div>
           <div className="chatWindow--footer"></div>
      </div>
  );
}

export default ChatWindow;
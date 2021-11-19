import React, {useState} from 'react';
import EmojiPicker  from 'emoji-picker-react';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import './ChatWindow.css';
import MessageItem from './MessageItem';


function ChatWindow() {
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;

  if(SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}]);

  const handleEmojiClick = (e, {emoji}) => {
    setText(text + emoji);
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(!emojiOpen);
  }

  const handleSendClick = () => {

  }

  const handleMicClick = () => {
    if(recognition !== null) {

      recognition.onstart = () => {
        setListening(true);
      }

      recognition.onend = () => {
        setListening(false);
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }  
  }

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

        <div className="chatWindow--body">
          {list.map((item, key) => (
            <MessageItem 
              key={key}
              data={item}
            />
          ))}
        </div>

        <div 
          className="chatWindow--emojiArea"
          style={{height: emojiOpen ? '200px' : '0px'}}
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick} 
            disableSearchBar
            disableSkinTonePicker
          />
        </div>

        <div className="chatWindow--footer">

          <div className="chatWindow--pre">
            <div 
              className="chatWindow--btn"
              onClick={handleOpenEmoji}
              style={{visibility: emojiOpen ? 'visible' : 'hidden'}}
            >
                <CloseIcon  style={{color: '#919191'}}/>
            </div>
            <div 
              className="chatWindow--btn"
              onClick={handleOpenEmoji}
            >
                <InsertEmoticonIcon  style={{color:emojiOpen ? '#009688' : '#919191'}}/>
            </div>
          </div>

          <div className="chatWindow--inputArea">
            <input 
              className="chatWindow--input" 
              type="text"
              placeholder="Digite uma mensagem"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="chatWindow--pos">
            { text === ''  ? (
              <div 
                className="chatWindow--btn"
                onClick={handleMicClick}
              >
                <MicIcon  style={{color: listening ? '#009688' : '#919191'}}/>
              </div>
            ) : (
              <div 
                className="chatWindow--btn"
                onClick={handleSendClick}
              >
                <SendIcon  style={{color: '#919191'}}/>
              </div>  
            )}
          </div>

        </div>
      </div>
  );
}

export default ChatWindow;
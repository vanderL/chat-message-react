import React from 'react';
import IntroChatWhatsapp from '../assets/intro.jpg'
import './ChatIntro.css';


function ChatIntro() {
  return (
      <div className="chatIntro">
            
            <img src={IntroChatWhatsapp}/>

            <h1>Matenha seu celular conectado</h1>
            <h2>
                O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. <br /> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
      </div>
  );
}

export default ChatIntro;
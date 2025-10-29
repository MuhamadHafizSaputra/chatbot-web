import { useState } from 'react'
import {ChatMessage, ChatMessages } from './Components/ChatMessage'
import { ChatInput } from './Components/ChatInput'
import './App.css'

      function App () {
        const array = useState([{
          message:"hello chatbot",
          sender:"user",
          id:"id1"
        }, {
          message:"Hello, how can I help you",
          sender:"robot",
          id:"id2"
        }, {
          message:"I want to study",
          sender:"user",
          id:"id3"
        }])
        const arrayMessage = array[0];
        const setArrayMessage = array[1];
        return (
          <div className="app-container">
            <ChatMessages 
              arrayMessage={arrayMessage}
              setArrayMessage={setArrayMessage}
            />
            <ChatInput 
              arrayMessage={arrayMessage}
              setArrayMessage={setArrayMessage}
            />
          </div>
        )
      }

      /*const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<App />);*/

export default App

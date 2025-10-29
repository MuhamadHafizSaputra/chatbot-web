import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'; 
import './App.css'

 function ChatInput ({arrayMessage, setArrayMessage}) {
        const [chatInput, setChatInput] = useState('');

        function saveMessage (event) {
          setChatInput(event.target.value)
        }

        function addMessage () {
          let newMessage = [
            ...arrayMessage, {
            message: chatInput,
            sender: "user",
            id: crypto.randomUUID()
          }]

          setArrayMessage(newMessage);

          const response = Chatbot.getResponse(chatInput);

          setArrayMessage([
            ...newMessage, {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          }])

          setChatInput('')
        }

        return (
          <div className="input-container">
            <input className="input" placeholder = "Input here" size="30" onChange={saveMessage} value={chatInput}></input>
            <button className="button" onClick={addMessage}>Send</button>
          </div>
        )
      }

      function ChatMessage ({message, sender}) {
        return (
          <div className={sender==='user' ? 'chat-user' : 'chat-robot'}>
            {sender === "robot" && (<img src="robot.png" width="25" />)}
            <div className="teks">{message}</div>
            {sender === "user" && <img src="user.png" width="25" />}
          </div>
        )
      }

      function ChatMessages ({arrayMessage}) {
        const chatMessageRef = useRef(null);

        useEffect(() => {
          const containerElem = chatMessageRef.current; 
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }}, [arrayMessage]
        );

        return (
          <div className="chat-container" ref={chatMessageRef}>
             {arrayMessage.map((chat) => {
              return (
                <ChatMessage
                  message={chat.message} 
                  sender={chat.sender} 
                  key={chat.id}
                />
              )
             })}
          </div>
        )
      }

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

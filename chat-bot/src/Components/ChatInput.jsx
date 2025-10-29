import { useState } from 'react'
import { Chatbot } from 'supersimpledev'; 

export function ChatInput ({arrayMessage, setArrayMessage}) {
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
import { useRef, useEffect } from 'react'

export function ChatMessage ({message, sender}) {
        return (
          <div className={sender==='user' ? 'chat-user' : 'chat-robot'}>
            {sender === "robot" && (<img src="robot.png" width="25" />)}
            <div className="teks">{message}</div>
            {sender === "user" && <img src="user.png" width="25" />}
          </div>
        )
      }

export function ChatMessages ({arrayMessage}) {
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
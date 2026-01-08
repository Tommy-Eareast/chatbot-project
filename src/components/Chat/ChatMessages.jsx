import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatMessages({ messages }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const messagesContainer = messagesEndRef.current;
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }, [messages]);

    return (
        <ul
            ref={messagesEndRef}
            className="grow overflow-y-scroll p-4 space-y-4"
        >
            {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
            ))}
        </ul>
    );
}

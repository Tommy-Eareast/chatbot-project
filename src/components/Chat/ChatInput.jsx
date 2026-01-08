import { useState } from "react";

export default function ChatInput({ messages, setChatMessages }) {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (!message.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: message,
            sender: "user",
        };

        const newResponse = {
            id: Date.now() + 1,
            text: "Bot response " + message,
            sender: "bot",
        };

        setChatMessages([...messages, newMessage, newResponse]);
        setMessage("");
    };

    return (
        <div className="flex p-4 space-x-2 border-t border-grey-800">
            <input
                type="text"
                placeholder="Type here"
                className="input flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn cursor-pointer" onClick={handleSendMessage}>
                Send
            </button>
        </div>
    );
}

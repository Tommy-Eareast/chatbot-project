export default function ChatMessage({ message }) {
    return (
        <li
            className={`chat ${
                message.sender === "user" ? "chat-end" : "chat-start"
            }`}
        >
            <div className="chat-bubble">{message.text}</div>
        </li>
    );
}

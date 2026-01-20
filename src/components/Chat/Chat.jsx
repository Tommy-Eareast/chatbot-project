import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat({ conversation, onSendMessage }) {
    return (
        <div className="grow flex flex-col bg-black/20">
            <ChatMessages messages={conversation.messages} />
            <ChatInput activeId={conversation.id} onSend={onSendMessage} />
        </div>
    );
}

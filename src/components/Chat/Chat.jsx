import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat({ conversation, onSendMessage }) {
    return (
        <div className="grow flex flex-col h-screen justify-between mx-auto max-w-4xl h-full bg-black/60">
            <ChatMessages messages={conversation.messages} />
            <ChatInput activeId={conversation.id} onSend={onSendMessage} />
        </div>
    );
}

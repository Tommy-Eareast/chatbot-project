import { useState } from "react";
import ConversationTab from "./ConversationTab";

export default function ConversationList({
    conversations,
    activeId,
    onSelect,
}) {
    const [chatExpanded, setChatExpanded] = useState(true);
    return (
        <div className="flex flex-col overflow-auto">
            <div className="p-1 flex justify-between items-center text-gray-800">
                <div>Your Chats</div>
                <button
                    className="btn"
                    onClick={() => setChatExpanded(!chatExpanded)}
                >
                    {chatExpanded ? "v" : ">"}
                </button>
            </div>
            {chatExpanded &&
                conversations.map((conversation) => (
                    <ConversationTab
                        key={conversation.id}
                        isActive={activeId === conversation.id}
                        title={conversation.title}
                        onClick={() => onSelect(conversation.id)}
                    />
                ))}
        </div>
    );
}

import { useState } from "react";

import ConversationList from "./Conversation/ConversationList";
import Toolbar from "./Toolbar";

export default function Sidebar({
    conversations,
    activeId,
    onSelect,
    onAddConversation,
}) {
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    return (
        <div
            className={`flex flex-col ${sidebarExpanded && "min-w-3xs"} bg-white/20`}
        >
            {!sidebarExpanded ? (
                <button
                    className="btn"
                    onClick={() => setSidebarExpanded(!sidebarExpanded)}
                >
                    {">"}
                </button>
            ) : (
                <>
                    <Toolbar
                        activeId={activeId}
                        onExpand={() => setSidebarExpanded(!sidebarExpanded)}
                        onAddConversation={onAddConversation}
                    />
                    <ConversationList
                        conversations={conversations}
                        activeId={activeId}
                        onSelect={onSelect}
                    />
                </>
            )}
        </div>
    );
}

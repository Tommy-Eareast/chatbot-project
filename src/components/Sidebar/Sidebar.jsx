export default function Sidebar({ conversations, activeId, onSelect }) {
    return (
        <div className="grow flex flex-col h-screen justify-between mx-auto max-w-4xl h-full bg-black/60">
            {conversations.map((conversation) => (
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

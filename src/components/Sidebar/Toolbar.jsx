export default function Toolbar({ activeId, onExpand, onAddConversation }) {
    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <button className="btn" onClick={onAddConversation}>
                        Logo
                    </button>
                    <button className="btn" onClick={onExpand}>
                        {"<"}
                    </button>
                </div>
                <div className="flex flex-col">
                    <button
                        className={`btn ${activeId === 0 && "bg-orange-400"}`}
                        onClick={onAddConversation}
                    >
                        New chat
                    </button>
                    <button className="btn">Search chat</button>
                </div>
            </div>
        </div>
    );
}

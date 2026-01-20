export default function ConversationTab({ isActive, title, onClick }) {
    return (
        <div
            className={`btn cursor-pointer ${isActive && "bg-orange-400"}`}
            onClick={onClick}
        >
            {title}
        </div>
    );
}

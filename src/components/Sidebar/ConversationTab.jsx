export default function ConversationTab({ isActive, title, onClick }) {
    return (
        <div
            className={`btn cursor-pointer ${isActive ? "bg-blue-500" : ""}`}
            onClick={onClick}
        >
            {title}
        </div>
    );
}

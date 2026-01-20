import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

const NEW_CONVERSATION = {
    id: 0,
    title: "New conversation",
    messages: [
        {
            id: 1,
            sender: "bot",
            text: "Welcome! How can I assist you today?",
        },
    ],
};

function App() {
    const [activeId, setActiveId] = useState(0);
    const [conversations, setConversations] = useState([]);

    const activeConversation =
        conversations.find((c) => c.id === activeId) || NEW_CONVERSATION;

    const addMessage = (conversationId, text) => {
        if (conversationId === 0) {
            const newConversation = {
                id: Date.now(),
                title: `Conversation ${conversations.length + 1}`,
                messages: [
                    {
                        id: Date.now(),
                        sender: "user",
                        text,
                    },
                    {
                        id: Date.now() + 1,
                        sender: "bot",
                        text: "bot response " + text,
                    },
                ],
            };

            setConversations([...conversations, newConversation]);
            setActiveId(newConversation.id);
        } else {
            setConversations((prev) =>
                prev.map((conv) =>
                    conv.id === conversationId
                        ? {
                              ...conv,
                              messages: [
                                  ...conv.messages,
                                  {
                                      id: Date.now(),
                                      sender: "user",
                                      text,
                                  },
                                  {
                                      id: Date.now() + 1,
                                      sender: "bot",
                                      text: "bot response " + text,
                                  },
                              ],
                          }
                        : conv,
                ),
            );
        }
    };

    const addConversation = () => {
        setActiveId(0);
    };

    return (
        <div className="flex w-screen h-screen bg-orange-400">
            {conversations.length > 0 && (
                <Sidebar
                    conversations={conversations}
                    activeId={activeId}
                    onAddConversation={addConversation}
                    onSelect={setActiveId}
                />
            )}
            <Chat
                conversation={activeConversation}
                onSendMessage={addMessage}
            />
        </div>
    );
}

export default App;

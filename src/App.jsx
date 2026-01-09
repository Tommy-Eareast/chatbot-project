import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function App() {
    const [activeId, setActiveId] = useState(1);
    const [conversations, setConversations] = useState([
        {
            id: 1,
            title: "Conversation 1",
            messages: [
                {
                    id: 1,
                    sender: "user",
                    text: "I love you.",
                },
                {
                    id: 2,
                    sender: "bot",
                    text: "I loved you too.",
                },
                {
                    id: 3,
                    sender: "user",
                    text: "I loved you too2.",
                },
                {
                    id: 4,
                    sender: "user",
                    text: "I loved you too3.",
                },
                {
                    id: 5,
                    sender: "bot",
                    text: "I loved you too4.",
                },
                {
                    id: 6,
                    sender: "bot",
                    text: "I loved you too5.",
                },
            ],
        },
    ]);

    const activeConversation = conversations.find((c) => c.id === activeId);

    const addMessage = (conversationId, text) => {
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
                    : conv
            )
        );
    };

    return (
        <div className="flex flex-col max-w-screen max-h-screen min-w-screen min-h-screen bg-app">
            <Sidebar
                conversations={conversations}
                activeId={activeId}
                onSelect={setActiveId}
            />
            <Chat
                conversation={activeConversation}
                onSendMessage={addMessage}
            />
        </div>
    );
}

export default App;

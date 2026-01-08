import { useState } from "react";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat() {
    const [chatMessages, setChatMessages] = useState([
        {
            id: 1,
            text: "You were the Chosen One!",
            sender: "user",
        },
        {
            id: 2,
            text: "I loved you.",
            sender: "bot",
        },
        {
            id: 3,
            text: "I loved you.",
            sender: "user",
        },
        {
            id: 4,
            text: "You were the Chosen One!",
            sender: "bot",
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate ligula Aenean tempus rus ultricies, ut venenatis justo tristique. Fusce ultrices mollis erat suscipit varius.",
            sender: "bot",
        },
        {
            id: 6,
            text: "I loved you.",
            sender: "bot",
        },
        {
            id: 7,
            text: "You were the Chosen One!",
            sender: "user",
        },
        {
            id: 8,
            text: "I loved you.",
            sender: "bot",
        },
        {
            id: 9,
            text: "I loved you.",
            sender: "user",
        },
        {
            id: 10,
            text: "You were the Chosen One!",
            sender: "bot",
        },
        {
            id: 11,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate ligula Aenean tempus rus ultricies, ut venenatis justo tristique. Fusce ultrices mollis erat suscipit varius.",
            sender: "bot",
        },
        {
            id: 12,
            text: "I loved you.",
            sender: "bot",
        },
    ]);

    return (
        <div className="grow flex flex-col h-screen justify-between mx-auto max-w-4xl h-full bg-black/60">
            <ChatMessages messages={chatMessages} />
            <ChatInput
                messages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

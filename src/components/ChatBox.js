// ChatBox.js
import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = ({ user }) => { // Pass user prop
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    scrollToBottom(); // Scroll to bottom on initial load

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when new messages are added
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} user={user} /> // Pass user prop
        ))}
        <div ref={messagesEndRef} />
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatBox;

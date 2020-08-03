import React, { useState, useEffect, useRef, useCallback } from "react";

import MessageInput from "../../components/MessageInput";
import MessageBalloon from "../../components/MessageBalloon";

import { fetchAllMessages, postMessage } from "./actions";

import { Toolbar, Messages, Wrapper, Scroll, Container } from "./styles";

const currentUser = "Jean";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const messagesContainerRef = useRef(null);

  const doFetchMessages = useCallback(async () => {
    try {
      const data = await fetchAllMessages();
      setMessages(data);
    } catch (errors) {
      handleError(errors);
    }
  }, []);

  useEffect(() => {
    doFetchMessages();
  }, [doFetchMessages]);

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    messagesContainer.scrollTop = window.innerHeight;
  }, [messages]);

  const handleOnSendMessage = async (message) => {
    setIsSending(true);
    setMessages([
      ...messages,
      {
        _id: Date.now(),
        isLocal: true,
        author: currentUser,
        message,
        timestamp: Date.now(),
      },
    ]);

    await postMessage(currentUser, message);
    doFetchMessages();
    setIsSending(false);
  };

  const handleError = (message) => {
    //TODO: this is something will need proper handling
    alert(JSON.stringify(message));
  };

  return (
    <Wrapper>
      <Scroll ref={messagesContainerRef}>
        <Messages>
          {messages.map((message) => (
            <MessageBalloon
              key={message._id}
              isOwnMessage={currentUser === message.author}
              {...message}
            />
          ))}
        </Messages>
      </Scroll>
      <Toolbar>
        <Container>
          <MessageInput isSending={isSending} onSend={handleOnSendMessage} />
        </Container>
      </Toolbar>
    </Wrapper>
  );
};

export default Chat;

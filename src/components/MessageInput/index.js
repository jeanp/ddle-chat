import React, { useState } from "react";
import { Input, SendButton } from "./styles";

const MessageInput = ({ isSending, onSend = () => {} }) => {
  const [message, setMessage] = useState("");

  const canSend = message.length > 0 && !isSending;

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (canSend) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <>
      <Input
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        placeholder="type a message"
        onKeyDown={handleKeyDown}
      />
      <SendButton onClick={handleSend} disabled={!canSend}>
        {isSending ? "..." : "Send"}
      </SendButton>
    </>
  );
};

export default MessageInput;

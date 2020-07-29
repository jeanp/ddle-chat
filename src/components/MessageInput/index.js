import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 100%;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  align-self: center;
  padding: 0 8px;
  border: 2px solid ${(props) => props.theme.toolbar.inputBorderColor};
  flex: 8;
`;

const SendButton = styled.button`
  border: none;
  width: 80px;
  border-radius: 6px;
  font-weight: 500;
  height: 100%;
  background-color: ${(props) =>
    props.theme.toolbar.sendButton.backgroundColor};
  margin-left: 8px;
  align-self: center;
  color: ${(props) =>
    props.disabled
      ? props.theme.toolbar.sendButton.disabledColor
      : props.theme.toolbar.sendButton.color};

  &:hover:enabled {
    color: ${(props) => props.theme.toolbar.sendButton.hoverColor};
    cursor: pointer;
  }
`;

const MessageInput = ({ onSend = () => {} }) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    onSend(message);
    setMessage("");
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
      <SendButton onClick={handleSend} disabled={message.length === 0}>
        Send
      </SendButton>
    </>
  );
};

export default MessageInput;

import React from "react";
import { Wrapper, Message, From, Timestamp } from "./styles";
import { formatTimestamp } from "../../utils";

const MessageBalloon = ({
  author,
  message,
  timestamp,
  isOwnMessage = false,
  isLocal = false,
}) => {
  return (
    <Wrapper isOwnMessage={isOwnMessage}>
      {!isOwnMessage && <From>{author}</From>}
      {isLocal && <From>Sending...</From>}
      <Message>{message}</Message>
      <Timestamp isOwnMessage={isOwnMessage}>
        {formatTimestamp(timestamp)}
      </Timestamp>
    </Wrapper>
  );
};

export default MessageBalloon;

import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-self: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
  flex-direction: column;
  padding: 16px;
  border-radius: 6px;
  border: solid 1px black;
  margin: 16px 0;
  max-width: 70%;
  border-color: ${(props) => props.theme.messageBalloon.borderColor};
  background-color: ${(props) =>
    props.isOwnMessage
      ? props.theme.messageBalloon.ownMessageBackgroundColor
      : props.theme.messageBalloon.messageBackgroundColor};
`;

const From = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.messageBalloon.fromColor};
`;

const Message = styled.span`
  padding: 5px 0;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.messageBalloon.timestampColor};
  align-self: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
`;

const formatTimestamp = (timestamp) => format(timestamp, "dd MMM yyyy HH:mm");

const MessageBalloon = ({ from, message, timestamp, isOwnMessage = false }) => {
  return (
    <Wrapper isOwnMessage={isOwnMessage}>
      {!isOwnMessage && <From>{from}</From>}
      <Message>{message}</Message>
      <Timestamp isOwnMessage={isOwnMessage}>
        {formatTimestamp(timestamp)}
      </Timestamp>
    </Wrapper>
  );
};

export default MessageBalloon;

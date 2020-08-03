import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-self: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
  flex-direction: column;
  padding: 16px;
  border-radius: 6px;
  border: solid 1px black;
  margin: ${(props) => (props.isOwnMessage ? "8px 0" : "4px 0")};
  max-width: 70%;
  border-color: ${(props) => props.theme.messageBalloon.borderColor};
  background-color: ${(props) =>
    props.isOwnMessage
      ? props.theme.messageBalloon.ownMessageBackgroundColor
      : props.theme.messageBalloon.messageBackgroundColor};
`;

export const From = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.messageBalloon.fromColor};
`;

export const Message = styled.span`
  padding: 5px 0;
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.messageBalloon.timestampColor};
  align-self: ${(props) => (props.isOwnMessage ? "flex-end" : "flex-start")};
`;

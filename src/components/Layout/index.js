import React from "react";
import styled from "styled-components";
import MessageBalloon from "../MessageBalloon";
import MessageInput from "../MessageInput";

import BackgroundImageSrc from "./assets/body-bg.png";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-image: url(${BackgroundImageSrc});
`;

const Container = styled.div`
  width: calc(100% - 18px);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
`;

const Toolbar = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 60px;
  padding: 8px 0;
  background-color: ${(props) => props.theme.toolbar.backgroundColor};
`;

const Messages = styled(Container)`
  display: flex;
  flex: 9 1 auto;
  flex-direction: column;
`;

const Scroll = styled.div`
  overflow-y: auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Scroll>
        <Messages>
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, "
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world, This is a long Hello world,"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
          <MessageBalloon
            from="Jean"
            message="Hello world"
            timestamp={Date.now()}
            isOwnMessage
          />
        </Messages>
      </Scroll>
      <Toolbar>
        <Container>
          <MessageInput />
        </Container>
      </Toolbar>
    </Wrapper>
  );
};

export default Layout;

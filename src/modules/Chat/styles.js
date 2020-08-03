import styled from "styled-components";

import BackgroundImageSrc from "./assets/body-bg.png";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-image: url(${BackgroundImageSrc});
`;

export const Container = styled.div`
  width: calc(100% - 18px);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
`;

export const Toolbar = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 60px;
  padding: 8px 0;
  background-color: ${(props) => props.theme.toolbar.backgroundColor};
`;

export const Messages = styled(Container)`
  display: flex;
  flex: 9 1 auto;
  flex-direction: column;
  min-height: calc(100vh - 70px);
`;

export const Scroll = styled.div`
  overflow-y: auto;
`;

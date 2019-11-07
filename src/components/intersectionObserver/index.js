import * as React from "react";
import styled from "styled-components";
import { useIntersect } from "./hooks/useIntersect";

export const IntersectionObserver = ({ children }) => {
  const [setNode, entry] = useIntersect({ root: null });

  return (
    <Container ref={setNode}>{entry.isIntersecting && children}</Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 500px;
  border: 1px solid black;
  margin: 10px;
`;

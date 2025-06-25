import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  box-sizing: border-box;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.error};
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
`;

type MessagePageProps = {
  text: string;
};

export default function MessagePage({ text }: MessagePageProps) {
  return (
    <Wrapper>
      <Message>{text}</Message>
    </Wrapper>
  );
}

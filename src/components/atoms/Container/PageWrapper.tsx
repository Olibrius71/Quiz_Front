import styled from 'styled-components';

const PageWrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export default PageWrapper;
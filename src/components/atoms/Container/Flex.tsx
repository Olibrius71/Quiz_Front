import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center';
  className?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-between'};
  align-items: center;
`;

const Flex: FC<FlexProps> = ({ children, className, ...props }) => {
  return (
    <StyledFlex className={className} {...props}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
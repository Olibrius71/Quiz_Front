import styled from 'styled-components';

type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  rounded?: boolean;
  className?: string;
};

const StyledImage = styled.img<Omit<ImageProps, 'src' | 'alt' | 'className'>>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: ${({ rounded }) => rounded ? '8px' : '0'};
  display: block;
`;

export const Image: React.FC<ImageProps> = ({
  src,
  className,
  ...props
}) => {
  return <StyledImage src={src} className={className} {...props} />;
};
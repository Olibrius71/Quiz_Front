import React from 'react';

type ButtonGroupProps = {
  children: React.ReactNode;
  gap?: number;
};

export default function ButtonGroup({ children, gap = 4 }: ButtonGroupProps) {
  return (
    <div className={`flex gap-${gap}`}>
      {children}
    </div>
  );
}

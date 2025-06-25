import React from 'react';

type IconButtonProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  disabled?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};
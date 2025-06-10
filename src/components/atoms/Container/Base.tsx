
const Base = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Base;
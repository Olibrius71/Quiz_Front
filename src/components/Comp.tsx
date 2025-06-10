const Comp = ({ message = "ok", children }: { message?: string, children?: React.ReactNode }) => {
  return (
    <div>
      <h1>{message}</h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Comp;
const AuthFormWrapper = ({ title, children }) => {
  return (
    <div className="form-wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default AuthFormWrapper;

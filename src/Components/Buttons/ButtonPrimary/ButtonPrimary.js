import "./ButtonPrimary.css";
const ButtonPrimary = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="curs-point button-primary"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary };

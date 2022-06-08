import "./ButtonSecondary.css";
const ButtonSecondary = ({ children, onClick, type }) => {
  return (
    <button
      className="button-secondary curs-point"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export { ButtonSecondary };

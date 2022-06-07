import "./ButtonSecondary.css";
const ButtonSecondary = ({ children, onClick }) => {
  return (
    <button className="button-secondary curs-point" onClick={onClick}>
      {children}
    </button>
  );
};

export { ButtonSecondary };

import "./Button.css";

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
      <button className="btn">{label}</button>
    </>
  );
};

export default Button;

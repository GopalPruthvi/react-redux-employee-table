const Button = ({ text,color, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick} style={{background:color}} >
        {text}
      </button>
    </>
  );
};

export default Button;

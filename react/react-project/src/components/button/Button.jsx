import "./button.styles.css";

function Button({ text, handleClick, isDark }) {
  return (
    <button
      className={isDark ? "small-button-dark" : "small-button"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;

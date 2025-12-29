const Button = ({
  children,
  type = 'button',
  handleClick,
  loading = false,
}) => {
  return (
    <button
      type={type}
      className={`submit button-primary full-width-on-mobile ${
        loading ? 'loading' : ''
      }`}
      onClick={handleClick}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;

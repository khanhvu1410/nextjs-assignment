import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { placeholder, type = 'text', error, ...rest } = props;

  return (
    <div className="form-field">
      <input
        type={type}
        ref={ref}
        className="full-width"
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
});

export default Input;

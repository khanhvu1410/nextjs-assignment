import { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
  const { placeholder, error, ...rest } = props;

  return (
    <div className="form-field">
      <textarea
        ref={ref}
        className="full-width"
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
});

export default Textarea;

import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  error?: FieldError;
  autoComplete?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, placeholder, autoComplete, error = null, ...rest },
  ref,
) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
        {error && (
          <span className="label-text-alt text-error">{error.message}</span>
        )}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${error && 'input-error'}`}
        ref={ref}
        autoComplete={autoComplete}
        {...rest}
      />
    </div>
  );
};

const Input = forwardRef(InputBase);

export default Input;

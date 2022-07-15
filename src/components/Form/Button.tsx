type ButtonProps = {
  isSubmitting: boolean;
  isValid: boolean;
  label: string;
};

export default function Button({ isSubmitting, isValid, label }: ButtonProps) {
  return (
    <div className="mt-6 form-control">
      <button
        type="submit"
        className={`btn btn-primary ${isSubmitting && 'loading'}`}
        disabled={!isValid}
      >
        {label}
      </button>
    </div>
  );
}

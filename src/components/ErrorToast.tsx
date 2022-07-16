type ErrorToastProps = {
  message: string;
};

export default function ErrorToast({ message }: ErrorToastProps) {
  return (
    <div className="toast toast-top toast-end" role="alert">
      <div className="alert alert-error">
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}

// ErrorBox.tsx
type ErrorBoxProps = {
  message: string;
};

const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
      {message}
    </div>
  );
};

export default ErrorBox;

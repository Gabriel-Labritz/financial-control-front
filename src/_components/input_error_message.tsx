interface InputErrorMessageProps {
  error_message: string | undefined;
}

export default function InputErrorMessage({ error_message }: InputErrorMessageProps) {
  return <p className="text-[12px] text-destructive">{error_message}</p>
}
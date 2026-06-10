import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  error,
  optional,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-bp-black/70"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-normal normal-case tracking-normal text-bp-black/40">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full border border-bp-green/15 bg-white px-4 py-3.5 text-sm text-bp-black outline-none transition-[border-color,box-shadow] placeholder:text-bp-black/35 focus:border-bp-green focus:ring-2 focus:ring-bp-green/15 disabled:cursor-not-allowed disabled:opacity-60";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(inputBase, error && "border-red-400 focus:ring-red-200", className)}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        inputBase,
        "min-h-[140px] resize-y",
        error && "border-red-400 focus:ring-red-200",
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        inputBase,
        "cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231C3A2F%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10",
        error && "border-red-400 focus:ring-red-200",
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    >
      {children}
    </select>
  );
}

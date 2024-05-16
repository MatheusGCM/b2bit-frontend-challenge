import { Eye, EyeOff } from 'lucide-react'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  secureTextEntry?: boolean
  showPassword?: boolean
  toggleShowPassword?(): void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      showPassword,
      secureTextEntry,
      error,
      className,
      toggleShowPassword,
      ...rest
    },
    ref,
  ) => {
    const iconPassword = showPassword ? <Eye /> : <EyeOff />

    return (
      <div>
        <label className="text-lg/[1.406rem] font-bold text-black-2">
          {label}
        </label>
        <div
          className={`mb-1 mt-2 flex w-full rounded-[0.563rem] border bg-white-3 p-[1.125rem] ${error ? 'border-red-b2' : 'border-white-3'}`}
        >
          <input
            ref={ref}
            className={`mr-2 w-full bg-transparent outline-none placeholder:text-gray-6 ${className}`}
            {...rest}
          />
          {secureTextEntry && (
            <span className="cursor-pointer" onClick={toggleShowPassword}>
              {iconPassword}
            </span>
          )}
        </div>

        <span className="text-red-b2 block h-3 text-xs">{error}</span>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }

import { LoaderCircle } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isLoading?: boolean
}

export function Button({ isLoading, label, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-[0.563rem] bg-blue-b2 duration-200 hover:opacity-95 disabled:pointer-events-none ${className}`}
      {...rest}
    >
      {isLoading ? (
        <LoaderCircle className="h-[3.516rem] w-5 animate-spin text-white-1" />
      ) : (
        <p className="text-lg/[3.516rem] font-bold text-white-1">{label}</p>
      )}
    </button>
  )
}

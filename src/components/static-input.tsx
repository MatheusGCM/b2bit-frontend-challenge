interface StaticInputProps {
  label: string
  value?: string
}

export function StaticInput({ label, value }: StaticInputProps) {
  return (
    <>
      <label className="text-sm/[0.75rem] text-black-2">
        Your <strong>{label}</strong>
      </label>
      <div
        className={`mb-3 flex w-full rounded-[0.563rem] bg-white-3 px-[1.125rem] pb-[1.266rem] pt-[1.125rem] text-xs/[0.75rem]`}
      >
        {value}
      </div>
    </>
  )
}

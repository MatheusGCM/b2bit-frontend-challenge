interface ProfilePictureProps {
  src?: string
}

export function ProfilePicture({ src }: ProfilePictureProps) {
  return (
    <div className="mb-[1.875rem] flex flex-col items-center gap-[0.594rem]">
      <p className="text-xs/[0.75rem] font-semibold">Profile picture</p>
      <img src={src} alt="" className="h-[3.5rem] w-[3.625rem] rounded-lg" />
    </div>
  )
}

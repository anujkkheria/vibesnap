import React from 'react'
interface IProfileHeader {
  edit: boolean
  bgimage: string
  profileimage: string | null | undefined
}
const ProfileHeader: React.FC<IProfileHeader> = ({
  edit = false,
  bgimage,
  profileimage,
}) => {
  return (
    <div
      className='relative h-[20vh] rounded-b-xl bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      {edit && 'edit'}
      <div
        className='absolute w-24 h-24 -bottom-10 rounded-full bg-black left-3 bg-cover bg-center bg-no-repeat '
        style={{
          backgroundImage: `url(${profileimage})`,
        }}
      >
        {edit && 'edit'}
      </div>
    </div>
  )
}
export default ProfileHeader

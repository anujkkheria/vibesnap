import React from 'react'
import PencilButton from './PencilButton'
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
      {edit && (
        <div className=' absolute right-4 bottom-2'>
          <PencilButton />
        </div>
      )}
      <div
        className='absolute w-24 h-24 -bottom-10 rounded-full bg-black left-3 bg-cover bg-center bg-no-repeat '
        style={{
          backgroundImage: `url(${profileimage})`,
        }}
      >
        <div className='relative w-full h-full'>
          {edit && (
            <div className=' absolute bottom-4 -right-1'>
              <PencilButton />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProfileHeader

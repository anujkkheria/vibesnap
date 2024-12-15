import React from 'react'
import { IRoundedButton } from '../types'
const RoundedButton: React.FC<IRoundedButton> = ({ handleClick }) => {
  return (
    <button
      className=' w-3/5 h-8 m-2 mr-3 px-3 rounded-full border border-gray-500'
      onClick={handleClick}
    >
      Edit Profile
    </button>
  )
}

export default RoundedButton

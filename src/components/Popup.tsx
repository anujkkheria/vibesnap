import React from 'react'
import { IPopup } from '../types'
const Popup: React.FC<IPopup> = () => {
  return (
    <div className=' fixed top-0 bottom-0 right-0 left-0 w-screen h-screen bg-black opacity-80'>
      <div className=' shadow-md bg-white size-1/2'>
        <div>Upload</div>
        <div>camera</div>
      </div>
    </div>
  )
}

export default Popup

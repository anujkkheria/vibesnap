import { useState } from 'react'
import Header from '../components/Profile/Header'
import BackButton from '../components/BackButton'
import FormInput from '../components/FormInput'
import { useAuth } from '../context/AuthContext'

const EditProfile = () => {
  const { user } = useAuth()
  const [userName, setUserName] = useState('anuj')
  const [bio, setBio] = useState('Life is all about.....')
  const profileimage = user?.providerData[0].photoURL
  return (
    <div className=' h-full'>
      <h2 className='fixed top-2 left-10 z-10 font-bold'>Edit Profile</h2>
      <Header
        edit={true}
        profileimage={profileimage}
        bgimage='https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?w=1200&q=80'
      />
      <div className=' h-full border border-blue-400 my-12 px-2 w-full flex flex-col space-between gap-52 '>
        <div className=' flex flex-col gap-6'>
          <FormInput label={'Name'} value={userName} onChange={setUserName} />
          <FormInput label={'Bio'} value={bio} onChange={setBio} />
        </div>
        <div className=' self-end w-full'>
          <button className='w-full  py-2 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors'>
            Save
          </button>
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default EditProfile

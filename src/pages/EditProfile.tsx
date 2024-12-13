import { useState } from 'react'
import Header from '../components/Profile/Header'
import FormInput from '../components/FormInput'
import { useAuth } from '../context/AuthContext'
import RoundedButton from '../components/RoundedButton'
const EditProfile = () => {
  const { user } = useAuth()
  const [userName, setUserName] = useState('anuj')
  const [bio, setBio] = useState('Life is all about.....')
  const profileimage = user?.providerData[0].photoURL
  return (
    <div className='relative h-full'>
      <Header
        edit={true}
        profileimage={profileimage}
        bgimage='https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?w=1200&q=80'
      />
      <div className=' h-full my-12 px-5 w-full flex flex-col gap-6'>
        <FormInput label={'Name'} value={userName} onChange={setUserName} />
        <FormInput label={'Bio'} value={bio} onChange={setBio} />
      </div>
      <div className=' self-end'>
        <button className='w-full my-0 mt-40 mx-auto py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors'>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditProfile

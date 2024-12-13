import { useAuth } from '../context/AuthContext'
import ProfileHeader from '../components/Profile/Header'
import ProfileInfo from '../components/Profile/ProfileInfo'
import RoundedButton from '../components/RoundedButton'
import BackButton from '../components/BackButton'
import { CreatePost } from '../components/Feed/CreatePost'
const Profile = () => {
  const { user } = useAuth()
  const profileimage = user?.providerData[0].photoURL
  console.log(profileimage)
  return (
    <div className='relative'>
      <ProfileHeader
        edit={false}
        profileimage={profileimage}
        bgimage='https://images.unsplash.com/photo-1579546929518-9e396f3cc809'
      />
      <div className='w-full flex flex-row-reverse'>
        <RoundedButton />
      </div>
      <div>
        <ProfileInfo />
      </div>
      <div className=' absolute top-2 left-2'>
        <BackButton />
      </div>
      <div className=' absolute bottom-8 right-6 w-6 h-6'>
        <CreatePost />
      </div>
    </div>
  )
}

export default Profile

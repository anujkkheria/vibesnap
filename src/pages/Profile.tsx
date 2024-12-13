import { useAuth } from '../context/AuthContext'
import ProfileHeader from '../components/Profile/Header'
import ProfileInfo from '../components/Profile/ProfileInfo'
import RoundedButton from '../components/RoundedButton'
const Profile = () => {
  const { user } = useAuth()
  const profileimage = user?.providerData[0].photoURL
  return (
    <div>
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
    </div>
  )
}

export default Profile

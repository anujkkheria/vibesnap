import { useAuth } from '../context/AuthContext'
import ProfileHeader from '../components/Profile/Header'
import ProfileInfo from '../components/Profile/ProfileInfo'
import RoundedButton from '../components/RoundedButton'
import BackButton from '../components/BackButton'
import { CreatePost } from '../components/Feed/CreatePost'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const profileimage = user?.providerData[0].photoURL
  const handleEditButtonClick = () => {
    navigate('/edit')
  }
  return (
    <div className='relative'>
      <ProfileHeader
        edit={false}
        profileimage={profileimage}
        bgimage='https://images.unsplash.com/photo-1579546929518-9e396f3cc809'
      />
      <div className='w-full flex flex-row-reverse'>
        <RoundedButton handleClick={handleEditButtonClick} />
      </div>
      <div>
        <ProfileInfo />
      </div>
      <BackButton />
      <div className=' absolute bottom-8 right-6 w-6 h-6'>
        <CreatePost />
      </div>
    </div>
  )
}

export default Profile

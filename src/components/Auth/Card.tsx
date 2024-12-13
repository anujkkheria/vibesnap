import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import GoogleSVG from '../../assets/682665_favicon_google_logo_new_icon.svg'
import Logo from '../../assets/2de875e6142d3dde26f7cea380c77837 1.svg'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError(null)
      await signIn()
      navigate('/profile')
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.')
      console.error('Failed to sign in with Google:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='absolute bottom-0 w-full h-56'>
      <div className='bg-white p-8 rounded-t-[3rem] border-2 shadow-lg w-full h-full'>
        <div className='flex flex-col items-center space-y-2 mb-8'>
          <div className='flex items-center gap-2'>
            <img src={Logo} alt='Vibesnap Logo' className='h-8' />
            <h2 className='text-2xl font-bold'>Vibesnap</h2>
          </div>
          <p className='text-center text-[0.8rem]'>
            Moments that matter shared together
          </p>
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-lg'>
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`w-full bg-black border border-gray-300 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <div className='w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin' />
          ) : (
            <img src={GoogleSVG} alt='Google' className='w-5 h-5' />
          )}
          {loading ? 'Signing in...' : 'Continue with Google'}
        </button>
      </div>
    </div>
  )
}

export default Card

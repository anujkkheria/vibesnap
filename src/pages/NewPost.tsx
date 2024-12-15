import BackButton from '../components/BackButton'
const NewPost = () => {
  return (
    <div className=' w-screen h-screen border-2 border-blue-300'>
      <BackButton />
      <h2 className='fixed top-2 left-8 font-bold'>New Post</h2>
      <div className=' size-full border-2 border-red-600 flex flex-col gap-12 justify-between p-2'>
        <div className='mt-6 p-2'>
          <div className=' size-72 bg-gray-300 flex justify-center'>
            <div className='size-1/2 bg white'>
              <img src='' alt='' />
            </div>
            <div></div>
          </div>
        </div>
        <div className=' self-end w-full'>
          <button className='w-full  py-2 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors'>
            Preview
          </button>
        </div>
      </div>
    </div>
  )
}
export default NewPost

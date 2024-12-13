import MyPostCard from './MyPostCard'
const ProfileInfo = () => {
  const posts = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/300x400',
      span: 'span 2',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/300x300',
      span: 'span 1',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/300x500',
      span: 'span 3',
    },
    // Add more posts as needed
  ]

  return (
    <div className='mx-5 m-2 flex flex-col gap-2'>
      <div className='flex flex-col gap-2 border border-black'>
        <h2 className=' font-bold text-xl border border-black'>Name</h2>
        <p>bio</p>
      </div>
      <div></div>
      <p className=' font-semibold'>My Posts</p>
      <div className='grid w-full grid-cols-2  gap-4 overflow-auto'>
        {posts.map((post) => {
          return <MyPostCard key={post.id} image={post.image} />
        })}
      </div>
    </div>
  )
}

export default ProfileInfo

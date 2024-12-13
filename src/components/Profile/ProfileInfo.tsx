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
    {
      id: 4,
      image: 'https://source.unsplash.com/random/300x200',
      span: 'span 1',
    },
    {
      id: 5,
      image: 'https://source.unsplash.com/random/300x350',
      span: 'span 2',
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
      <div className='grid grid-cols-3 auto-rows-[100px] gap-4'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='rounded-lg bg-black overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'
            style={{
              gridRow: post.span,
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute bottom-2 left-2'>❤️</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileInfo

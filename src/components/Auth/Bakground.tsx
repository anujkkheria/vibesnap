import bgjson from '../../assets/images.json'

interface Iimage {
  id: number
  image: string
}
const Background = () => {
  return (
    <div className='grid grid-cols-3 gap-1  h-full w-full max-w-7xl'>
      {bgjson.map((image: Iimage) => {
        return (
          <div key={image.id} className='h-full col-span-1'>
            <img
              src={image.image}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Background

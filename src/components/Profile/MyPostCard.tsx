interface IMyPostCard {
  image?: string
}
import SVG from './heart'
const MyPostCard: React.FC<IMyPostCard> = ({ image }) => {
  return (
    <div className='relative w-full max-h-48 rounded-2xl overflow-clip break-inside-avoid'>
      <img
        src={
          'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'
        }
        alt=''
        className=' w-full h-48 border-2 border-black object-cover'
        loading='lazy'
      />
      <div className='absolute bottom-1 left-1 text-slate-50  w-full'>
        Heart
        <p className=' text-sm w-full text-slate-300 flex gap-1 items-center'>
          <SVG /> 67
        </p>
      </div>
    </div>
  )
}

export default MyPostCard

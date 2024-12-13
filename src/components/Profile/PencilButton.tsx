import pencil from '../../assets/HiPencil.svg'
const PencilButton = () => {
  return (
    <button className='w-6 h-6 rounded-full p-1 overflow-visible bg-neutral-50'>
      <img src={pencil} alt='' className=' w-4 h-4' />
    </button>
  )
}

export default PencilButton

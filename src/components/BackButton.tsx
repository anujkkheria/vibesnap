import ArrowBack from '../assets/HiArrowSmLeft.svg'
const BackButton = () => {
  return (
    <button className=' fixed top-2 left-2'>
      <img src={ArrowBack} alt='' className=' size-6' />
    </button>
  )
}
export default BackButton

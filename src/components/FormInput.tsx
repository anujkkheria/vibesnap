interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const FormInput = ({ label, value, onChange, placeholder }: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-medium text-gray-700'>{label}</label>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className='w-full px-3 py-2 border-b-4 border-gray-300 rounded-md focus:outline-none focus:border-b-4 focus:border-gray-500'
      />
    </div>
  )
}

export default FormInput

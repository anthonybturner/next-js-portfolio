import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      className="group flex items-center justify-center gap-2
            h-[3rem] w-[8rem]
            bg-gray-900
            border border-gray-900 
            text-white rounded-full outline-none transition-all
            borderBlack hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-75"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="group:hover:translate-x-1 text-xs opactiy-70 transition-all" />{' '}
        </>
      )}
    </button>
  )
}

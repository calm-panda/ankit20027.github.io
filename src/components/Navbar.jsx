import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  {/* bg-zinc-900 */ }
  return (
    <div className="mx-80 h-20 pl-3 py-3 border-b border-zinc-600 flex flex-row items-center justify-between">
      {/* Contact me */}
      <div className='flex items-center cursor-pointer'>
        <div className="rounded-full w-fit h-fit border border-zinc-800 bg-zinc-800/80">
          <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 m-3 text-zinc-600' />
        </div>
        <div className='w-fit ml-4 text-sm text-zinc-400'>Get in touch!</div>
      </div>
      <div className='flex items-center'>
        <div className='w-fit ml-4 text-sm text-zinc-400 cursor-pointer'>Linkedin /</div>
        <div className='w-fit ml-4 text-sm text-zinc-400 cursor-pointer'>Github /</div>
        <div className='w-fit ml-4 text-sm text-zinc-400 cursor-pointer'>Gmail</div>
      </div>
    </div>
  )
}

export default Navbar;
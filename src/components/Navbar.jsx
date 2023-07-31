const Navbar = () => {
  return (
    <div className="mx-80 h-20 pl-3 py-3 border-b text-sm border-zinc-600 flex flex-row items-center justify-between">
      {/* Contact me */}
      <a target="_blank" rel="noopener noreferrer" href="mailto:ankit20027@iiitd.ac.in">
        <div className='flex items-center cursor-pointer hover:text-zinc-200'>
          <div className="rounded-full w-fit h-fit border border-zinc-800 bg-zinc-800/80">
            <svg className='w-5 h-5 m-3 text-zinc-600' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" fill="currentColor"><path d="M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path></svg>
          </div>
          <div className='w-fit ml-4'>Get in touch!</div>
        </div>
      </a>
      <div className='flex items-center [&>div]:w-fit [&>div]:ml-4 [&>div]:cursor-pointer'>
        <div><a className="hover:text-zinc-200" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/ankit-20027">Linkedin /</a></div>
        <div><a className="hover:text-zinc-200" target="_blank" rel="noopener noreferrer" href="https://github.com/ankit20027">Github /</a></div>
        <div><a className="hover:text-zinc-200" target="_blank" rel="noopener noreferrer" href="mailto:ankit20027@iiitd.ac.in">Gmail</a></div>
      </div>
    </div>
  )
}

export default Navbar;
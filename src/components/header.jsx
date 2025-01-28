function Header() {
  return (
    <>
      <header className="bg-base-200 text-base-content body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center text-primary mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-base-content p-2 bg-primary rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">My Reaction to ReactJS</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-base-300 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-primary-focus">First Link</a>
            <a className="mr-5 hover:text-primary-focus">Second Link</a>
            <a className="mr-5 hover:text-primary-focus">Third Link</a>
            <a className="mr-5 hover:text-primary-focus">Fourth Link</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
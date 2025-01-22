function Footer() {
  return (
    <footer className="bg-base-200 text-base-content body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
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
        <p className="text-sm text-neutral sm:ml-4 sm:pl-4 sm:border-l sm:border-base-300 sm:py-2 sm:mt-0 mt-4">
          © 2025 David Derr —
          <a
            href="https://twitter.com/knyttneve"
            className="text-secondary ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @knyttneve
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
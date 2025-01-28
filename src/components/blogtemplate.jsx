function BlogTemplate({ title, date, content }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-bold text-lg">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-base-content/80">{content}</p>
        <a className="link link-accent inline-flex items-center mt-4">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default BlogTemplate
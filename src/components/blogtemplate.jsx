import { useState } from 'react'
import localStorageImg from '../assets/localStorage.jpg'

function BlogTemplate({ title, date, content }) {
  // Split content into sections: paragraphs, line breaks, and code blocks
  const sections = content.split(/(\`\`\`.*?\`\`\`|\n)/gs)

  // State to manage the visibility of the full content
  const [isExpanded, setIsExpanded] = useState(false)

  // Helper function to apply text formatting (bold, italic, underline)
  const formatText = (text) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') // Bold (**bold**)
      .replace(/__(.+?)__/g, '<u>$1</u>') // Underline (__underline__)
      .replace(/_(.+?)_/g, '<i>$1</i>') // Italic (_italic_)
  }

  // Render sections with formatting (paragraphs, line breaks, and code blocks)
  const renderSections = (sections) => {
    return sections.map((section, index) => {
      // Replace the [IMAGE] placeholder with an actual image
      if (section.includes('[IMAGE]')) {
        return (
          <img
            key={index}
            src={localStorageImg}
            alt="Illustration of Local Storage"
            className="w-full mx-auto my-4 rounded-lg shadow-md"
          />
        )
      }

      // Check for code blocks
      if (section.startsWith('```') && section.endsWith('```')) {
        const code = section.slice(3, -3).trim()
        return (
          <pre
            key={index}
            className="bg-gray-900 text-gray-100 p-4 rounded whitespace-pre-wrap break-words overflow-x-auto"
          >
            <code>{code}</code>
          </pre>
        )
      }

      if (section === '\n') {
        return <br key={index} />
      }

      return (
        <p
          key={index}
          className="mb-1 break-words"
          dangerouslySetInnerHTML={{ __html: formatText(section) }}
        ></p>
      )
    })
  }

  // Extract the preview content (e.g., first 2 paragraphs or elements)
  const previewSections = sections.slice(0, 2)

  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-bold text-lg">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <div className="text-base-content/80">
          {isExpanded
            ? renderSections(sections) // Render full content
            : renderSections(previewSections)}
          <button
            className="btn btn-accent mt-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogTemplate
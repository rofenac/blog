import BlogTemplate from './BlogTemplate'
import { blogEntries } from '../components/blogentries'

function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      {blogEntries.map((entry, index) => (
        <BlogTemplate
          key={index}
          title={entry.title}
          date={entry.date}
          content={entry.content}
        />
      ))}
    </div>
  )
}

export default BlogPage
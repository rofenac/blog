import { useState } from 'react'

function BlogEntries({ /*className*/ }) {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: '', content: '' })

  const handleAddPost = () => {
    const newPostData = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0]
    }
    setPosts([newPostData, ...posts]) // Add new post to the top
    setNewPost({ title: '', content: '' }) // Clear form inputs
  }

  return (
    <section className={`bg-base-200 text-base-content overflow-hidden ${className}`}>
      <div className="container mx-auto px-5 py-24">
        <div className="divide-y divide-base-300">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-bold text-lg">Day 1</span>
              <span className="mt-1 text-sm text-neutral">22 Jan 2025</span>
            </div>
            <div className="md:flex-grow">
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                className="textarea textarea-bordered w-full mb-2"
              ></textarea>
              <button className="btn btn-primary" onClick={handleAddPost}>
                Add Post
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map(post => (
              <div key={post.id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.content}</p>
                  <p className="text-sm text-gray-500">Posted on: {post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogEntries
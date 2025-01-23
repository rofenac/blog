function BlogForm() {
  return (
    <>
      <section class="bg-base-100 text-base-content body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Blog Entry Form</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Use this for your blog entries.</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="form-control">
                  <label for="name" class="label">
                    <span class="label-text">Title</span>
                  </label>
                  <input type="text" id="title" name="title" placeholder="Entry Title" class="input input-bordered w-full" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="form-control">
                  <label for="email" class="label">
                    <span class="label-text">Date</span>
                  </label>
                  <input type="date" id="date" name="date" placeholder="Date of Entry" class="input input-bordered w-full" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="form-control">
                  <label for="content" class="label">
                    <span class="label-text">Content</span>
                  </label>
                  <textarea id="content" name="content" placeholder="Your blog entry" class="textarea textarea-bordered h-32 w-full"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="btn btn-primary flex mx-auto">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogForm
function Body({ className }) {
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
              <h2 className="text-2xl font-semibold mb-2">First Day of Blogging my ReactJS Voyage of Discovery</h2>
              <p className="text-base-content/80">
                Not too much happened, actually. Well, I tried to make this blog fancy by trying to implement a form that I could fill out to autopopulate the blog entries. Another idea is using something like Zapier to link my commit comments to my blog entries. I tried creating the form, got frustrated, cried, and then just found some pre-made components to use for now. I'll revisit those two options later.

                As for the quiz app project. It's moving ahead. I started on all the links to all the other pages using the React router. After seeing how I am implementing the links, I'm sure there is a way to refactor them. I'm trying to identify potential refactors as they occur. I think that's in keeping with the spirit of Agile. The next big thing with the quiz app is constructing the quiz logic. That might take a while. That, along with bug squashing and bringing up the UX/UI in parallel with the code, is keeping me busy.
              </p>
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

          <div className="py-8 flex flex-wrap md:flex-nowrap border-t border-base-300">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-bold text-lg">CATEGORY</span>
              <span className="mt-1 text-sm text-neutral">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-semibold mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
              <p className="text-base-content/80">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
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

          <div className="py-8 flex flex-wrap md:flex-nowrap border-t border-base-300">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-bold text-lg">CATEGORY</span>
              <span className="mt-1 text-sm text-neutral">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-semibold mb-2">Woke master cleanse drinking vinegar salvia</h2>
              <p className="text-base-content/80">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
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
        </div>
      </div>
    </section>
  )
}

export default Body
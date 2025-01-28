export const blogEntries = [
  {
    title: 'Entry 3',
    date: '28 Jan 2025',
    content: `I'm bad at making regular log entries. I'm going through my backlog, which hasn't been maintained either, and notice that a lot of it is nearing completion or is complete. That's not good if I am trying to simulate the Agile process this quarter. I need more backlog! I'll address each backlog item with updates:
    __**Page Navigation:**__
    I installed the React Router, and most links work on each page. I still need to flesh out some of the other auxiliary pages, but the home page and individual domain pages are accessible.
    __**Question Randomization Logic:**__
    The logic is looking pretty good. Users can select individual domain exams or can test on all questions. Also, scores are tallied, but do not persist between quiz sessions. Questions are given in random order with each new session/page refresh.
    __**Responsive Design for Desktop & Mobile Usability:**__
    I am concentrating on desktop at the moment, will address mobile later.
    __**Leaderboard Functionality:**__
    No progress.
    __**Instant Feedback for Quiz Questions:**__
    Instant feedback is implemented. The app will tell you if you got the question right or wrong and why. Red card for wrong answer, green card for correct answer.
    __**Scorekeeping Functionality:**__
    Implemented in the session. Nothing persistent yet.
    __**UX/UI:**__
    Being developed in parallel with quiz functionality. Site looks...decent. Refinements needed.
    __**Question Collection:**__
    80 out of 150 questions collected.`,
  },
  {
    title: 'Entry 2',
    date: '22 Jan 2025',
    content: `Not too much happened, actually. Well, I tried to make this blog fancy by trying to implement a form that I could fill out to autopopulate the blog entries. Another idea is using something like Zapier to link my commit comments to my blog entries. I tried creating the form, got frustrated, cried, and then just found some pre-made components to use for now. I'll revisit those two options later.
    As for the quiz app project. It's moving ahead. I started on all the links to all the other pages using the React router. After seeing how I am implementing the links, I'm sure there is a way to refactor them. I'm trying to identify potential refactors as they occur. I think that's in keeping with the spirit of Agile. The next big thing with the quiz app is constructing the quiz logic. That might take a while. That, along with bug squashing and bringing up the UX/UI in parallel with the code, is keeping me busy.`,
  },
  {
    title: 'Entry 1',
    date: '16 Jan 2025',
    content: `I've learned quite a bit about TailwindCSS today. I needed to in order how to figure out how to add links to the props on each page. Also, got the React router up and running. After some head scratching and research, I successfully added a link between the home and people pages. There was much rejoicing. One thing I discovered that I thought was really interesting, was a very elegant way (until it breaks) to only render cards that have content in them. I tried ternaries, a vanilla JS function; all of them repetitive and clunky. Then I found a two liner:
    \`\`\`
    File: pagetemplate.jsx
    [Line 71]
    const boxesToRender = boxes.filter((box) => box.title)

    and

    [Line 89]
    {boxesToRender.map((item, index) => (
     \`\`\`

    These two lines effectively block any cards from rendering that have an empty string in the card title. This makes it possible to add or subtract cards with ease on each page independently. Pretty neat.

    Also learned about "spreading operators". They make mapping props so much simpler.

    \`\`\`
    <HeaderTemplate {...props} />
    <BodyTemplate {...props} />
    \`\`\`

    _"The provided code snippet is part of a React component in the pagetemplate.jsx file. It renders two components, HeaderTemplate and BodyTemplate, and passes all the props received by the parent component to these child components using the spread operator ({...props})."_
    Got 50 high quality PMP practice questions both in plain text and JSON format. Thanks to David McLachlan for supplying them.
    Found a dark mode/purple TailwindCSS template to use for the main pages of the app. Dark background with purple components.
    Depending on screen size and resolution, the Tailwind components don't cover the entire screen. I wonder if the CSS puts a limit on the component size?`,
  },
  // Add more entries here
]
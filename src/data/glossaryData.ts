import { GlossaryTerm } from '../types';

export const glossaryData: GlossaryTerm[] = [
  {
    term: 'Algorithm',
    category: 'General',
    definition: 'A step-by-step set of instructions or rules designed to solve a specific problem or complete a task.',
    plainEnglish: 'Like a recipe for baking cupcakes: follow the measured steps in order to get the exact result every time.',
    example: 'A search algorithm that looks through your contacts list alphabetically.'
  },
  {
    term: 'API (Application Programming Interface)',
    category: 'Backend',
    definition: 'A formal set of protocols and tools that allows two distinct software applications to communicate and exchange data.',
    plainEnglish: 'Like a friendly waiter at a cafe: takes your order to the kitchen and returns with your matcha latte.',
    example: 'Fetching current city weather conditions from OpenWeatherMap API.'
  },
  {
    term: 'Array',
    category: 'JavaScript',
    definition: 'An ordered list or collection of data items stored together at contiguous index positions starting at 0.',
    plainEnglish: 'Like a jewelry organizer tray with numbered slots for your rings: slot 0, slot 1, slot 2.',
    example: 'const colors = ["blush", "lavender", "sage"];'
  },
  {
    term: 'Backend',
    category: 'Backend',
    definition: 'The server-side component of an application responsible for business logic, database management, and authentication.',
    plainEnglish: 'The backstage crew and electrical wiring in a theatre that makes the front stage show work smoothly.',
    example: 'A Node.js or Python server checking password hashes.'
  },
  {
    term: 'Boolean',
    category: 'General',
    definition: 'A primitive data type having only two possible values: true or false.',
    plainEnglish: 'A light switch: it is either switched ON or switched OFF.',
    example: 'const isSubscribed = true;'
  },
  {
    term: 'Bug',
    category: 'General',
    definition: 'An error, flaw, or unexpected behavior in computer software that causes it to produce incorrect or unexpected results.',
    plainEnglish: 'A typo in a knitting pattern that accidentally makes one sleeve three inches longer than the other.',
    example: 'A missing closing bracket causing a syntax error in the browser.'
  },
  {
    term: 'CSS (Cascading Style Sheets)',
    category: 'Frontend',
    definition: 'A stylesheet language used to describe the presentation, layout, typography, and colors of a document written in HTML.',
    plainEnglish: 'The interior design, paint, wallpaper, and lighting of your digital room.',
    example: 'body { background-color: #FAF8F5; color: #292524; }'
  },
  {
    term: 'Database',
    category: 'Backend',
    definition: 'An organized, structured collection of digital data stored and accessed electronically from a computer system.',
    plainEnglish: 'A filing cabinet with labeled folders where thousands of receipts or client files are neatly indexed.',
    example: 'PostgreSQL or Firestore storing user profiles and journal entries.'
  },
  {
    term: 'DOM (Document Object Model)',
    category: 'Frontend',
    definition: 'A programming interface for HTML documents representing the page as a hierarchical tree of objects that programs can manipulate.',
    plainEnglish: 'The family tree or blueprint of your webpage that JavaScript can reach into and remodel in real time.',
    example: 'document.getElementById("greeting").textContent = "Hello!";'
  },
  {
    term: 'Flexbox',
    category: 'Frontend',
    definition: 'A one-dimensional CSS layout model that provides an easy, consistent way to distribute space and align items within a container.',
    plainEnglish: 'An elastic ribbon where items stretch, shrink, and center themselves automatically.',
    example: 'display: flex; justify-content: space-between;'
  },
  {
    term: 'Frontend',
    category: 'Frontend',
    definition: 'The client-facing part of a website or app that users see, interact with, and navigate through in their browser.',
    plainEnglish: 'The storefront window, interior decor, displays, and checkout counter of a lovely boutique.',
    example: 'React, HTML, CSS, and animations rendered directly in Google Chrome.'
  },
  {
    term: 'Function',
    category: 'General',
    definition: 'A reusable block of code designed to perform a specific task, which can accept inputs (arguments) and return an output.',
    plainEnglish: 'A coffee grinder machine: you put coffee beans in, push a button, and ground coffee comes out.',
    example: 'function calculateDiscount(price) { return price * 0.9; }'
  },
  {
    term: 'Git',
    category: 'Git',
    definition: 'A distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers.',
    plainEnglish: 'An unlimited undo history and scrapbook memory book for your whole project.',
    example: 'git commit -m "Update homepage pastel colors"'
  },
  {
    term: 'GitHub',
    category: 'Git',
    definition: 'A cloud-based hosting service for software development and version control using Git, enabling global collaboration.',
    plainEnglish: 'A social gallery and cloud backup drive where developers showcase, share, and collaborate on code.',
    example: 'Hosting your open-source portfolio repository online.'
  },
  {
    term: 'HTML (HyperText Markup Language)',
    category: 'Frontend',
    definition: 'The standard markup language for documents designed to be displayed in a web browser, defining layout hierarchy and elements.',
    plainEnglish: 'The structural skeleton and foundation of a house: studs, drywall, doors, and windows before decorating.',
    example: '<article><h1>My Story</h1><p>Once upon a time...</p></article>'
  },
  {
    term: 'JSON (JavaScript Object Notation)',
    category: 'General',
    definition: 'A lightweight, human-readable data-interchange format based on JavaScript object syntax used for transmitting data between computers.',
    plainEnglish: 'A clean index card filled with key-value notes that any computer in the world can easily read.',
    example: '{"name": "Camille", "role": "Junior Developer", "level": 1}'
  },
  {
    term: 'Loop',
    category: 'General',
    definition: 'A programming structure that repeats a sequence of instructions until a specified condition is met.',
    plainEnglish: 'Stamping 50 envelopes: you repeat the action of stamping until the entire pile is done.',
    example: 'for (let i = 0; i < 5; i++) { console.log(i); }'
  },
  {
    term: 'npm (Node Package Manager)',
    category: 'General',
    definition: 'The default package manager for the JavaScript runtime environment Node.js, hosting hundreds of thousands of open-source libraries.',
    plainEnglish: 'An app store for code modules where you can install free tools like icons or chart engines with one command.',
    example: 'npm install lucide-react'
  },
  {
    term: 'Object',
    category: 'JavaScript',
    definition: 'A standalone entity in programming with properties (keys and values) that describe attributes or behaviors.',
    plainEnglish: 'An identity profile card describing a cat: fur color, eye color, age, and favorite snack.',
    example: 'const book = { title: "Little Women", author: "Louisa May Alcott" };'
  },
  {
    term: 'Pull Request (PR)',
    category: 'Git',
    definition: 'A proposal on GitHub to merge code changes from one branch or fork into another, allowing peer code review.',
    plainEnglish: 'Submitting a drafted essay to your study buddy for feedback before handing it to the teacher.',
    example: 'Opening a PR with a description of your new responsive header.'
  },
  {
    term: 'Responsive Design',
    category: 'Frontend',
    definition: 'An approach to web design making web pages render well on a variety of devices and window or screen sizes.',
    plainEnglish: 'Water taking the exact shape of whatever glass, mug, or vase you pour it into.',
    example: 'Using media queries or flexible percentage widths.'
  },
  {
    term: 'Variable',
    category: 'General',
    definition: 'A named container used to store and reference data values in a computer program.',
    plainEnglish: 'A labeled sticky note or ceramic jar holding a specific ingredient you might use later.',
    example: 'let readingGoal = 10;'
  }
];

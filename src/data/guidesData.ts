import { TopicGuide } from '../types';

export const guidesData: Record<string, TopicGuide> = {
  html: {
    id: 'html',
    title: 'HTML Essentials',
    category: 'The Skeleton of the Web',
    tagline: 'The architectural foundation for every web page ever made.',
    description: 'HTML (HyperText Markup Language) provides the structure and semantic meaning to web content. Think of it like the wooden framing and rooms of a charming townhouse before paint or furniture.',
    icon: 'CodeXml',
    readTime: '15 min read',
    difficulty: 'Beginner',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'HTML tags wrap content like opening <p> and closing </p> bookends',
      'Always include <!DOCTYPE html>, <head>, and <body> boilerplate',
      'Semantic tags like <header>, <main>, <nav> improve accessibility and SEO',
      'Forms gather input using <form>, <input>, <label>, and <button>'
    ],
    lessons: [
      {
        id: 'structure',
        title: 'Document Structure & Anatomy',
        badge: 'Lesson 1',
        summary: 'How an HTML file is set up and what the essential boilerplate tags do.',
        content: {
          intro: 'Every HTML page begins with standard scaffolding. When a browser loads your page, it reads top-to-bottom, recognizing declarations and elements that define character encoding, title, and visual body.',
          sections: [
            {
              heading: 'The Basic HTML5 Scaffold',
              body: 'Here is the minimal template required for any valid modern webpage. Notice how the <head> holds invisible metadata while the <body> contains everything the reader sees.',
              codeSnippet: {
                language: 'html',
                filename: 'index.html',
                code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Little Website ✿</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>Welcome to my handwritten corner of the internet.</p>
  </body>
</html>`
              },
              callout: {
                type: 'tip',
                text: 'Always provide a descriptive <title> tag. It appears in the browser tab and helps visitors bookmark your page!'
              }
            },
            {
              heading: 'Elements, Tags & Attributes',
              body: 'An HTML element usually consists of an opening tag, the inner content, and a closing tag. Some elements also take attributes inside the opening tag to provide extra details (like src for images or href for links).',
              codeSnippet: {
                language: 'html',
                filename: 'anatomy.html',
                code: `<!-- Link with an href attribute -->
<a href="https://github.com" target="_blank">Visit GitHub</a>

<!-- Image with src and descriptive alt text -->
<img src="cute-cat.jpg" alt="A fluffy white cat curled up on a desk" />

<!-- Self-closing tag (void element) -->
<hr />`
              }
            }
          ]
        }
      },
      {
        id: 'elements',
        title: 'Core Elements & Text Formatting',
        badge: 'Lesson 2',
        summary: 'Headings, paragraphs, lists, links, and inline text styling.',
        content: {
          intro: 'Text elements give rhythm and hierarchy to your pages. Just like in editorial magazine design, clear headings and comfortable paragraphs make reading effortless.',
          sections: [
            {
              heading: 'Headings from H1 to H6',
              body: 'Always use <h1> for your page’s main topic (only one per page for optimal accessibility), followed by <h2> for major sections and <h3> for sub-points.',
              codeSnippet: {
                language: 'html',
                filename: 'headings.html',
                code: `<h1>Her Codebook</h1>
<h2>Chapter 1: Getting Started</h2>
<h3>Section A: Setting up your text editor</h3>
<p>Opening a fresh code file feels like writing on page one of a new notebook.</p>

<!-- Unordered & Ordered lists -->
<ul>
  <li>Pink highlighters</li>
  <li>Clean mechanical keyboard</li>
  <li>Warm tea</li>
</ul>`
              },
              callout: {
                type: 'remember',
                text: 'Never pick heading tags just for font size! Use CSS to adjust appearance; use heading levels to reflect true semantic structure.'
              }
            }
          ]
        }
      },
      {
        id: 'semantic',
        title: 'Semantic HTML & Layout Tags',
        badge: 'Lesson 3',
        summary: 'Writing accessible, modern HTML using descriptive layout elements instead of endless divs.',
        content: {
          intro: 'Back in early web days, developers wrapped everything in generic <div> tags. Modern HTML5 introduced semantic tags that describe their role to screen readers, search engines, and future developers.',
          sections: [
            {
              heading: 'Semantic Architecture Layout',
              body: 'Using elements like <header>, <nav>, <main>, <article>, and <footer> creates a clear layout blueprint.',
              codeSnippet: {
                language: 'html',
                filename: 'layout.html',
                code: `<header>
  <nav aria-label="Main Navigation">
    <a href="/">Home</a>
    <a href="/guides">Guides</a>
  </nav>
</header>

<main>
  <article>
    <header>
      <h2>Why Learning to Code is Creative</h2>
      <time datetime="2026-09-17">Autumn 2026</time>
    </header>
    <p>Programming is simply expressing ideas with logical building blocks.</p>
  </article>
</main>

<footer>
  <p>Crafted with love & tea ✿</p>
</footer>`
              },
              callout: {
                type: 'tip',
                text: 'Screen readers allow visually impaired users to jump directly to the <main> tag or <nav> landmarks!'
              }
            }
          ]
        }
      },
      {
        id: 'forms',
        title: 'Forms & User Inputs',
        badge: 'Lesson 4',
        summary: 'Collecting text, selections, checkboxes, and buttons cleanly.',
        content: {
          intro: 'Forms are how visitors converse with your website — sending messages, submitting survey answers, or logging into their accounts.',
          sections: [
            {
              heading: 'Building an Accessible Contact Form',
              body: 'Always connect <label> elements to their inputs using matching for and id attributes so users can click on the label to focus the field.',
              codeSnippet: {
                language: 'html',
                filename: 'form.html',
                code: `<form action="/submit-note" method="POST">
  <div class="form-group">
    <label for="visitor-name">Your Name:</label>
    <input type="text" id="visitor-name" name="name" placeholder="e.g. Clara" required />
  </div>

  <div class="form-group">
    <label for="visitor-email">Email Address:</label>
    <input type="email" id="visitor-email" name="email" placeholder="clara@studio.com" required />
  </div>

  <div class="form-group">
    <label for="visitor-note">Leave a kind note:</label>
    <textarea id="visitor-note" name="note" rows="4"></textarea>
  </div>

  <button type="submit">Send Note ✦</button>
</form>`
              }
            }
          ]
        }
      }
    ]
  },

  css: {
    id: 'css',
    title: 'CSS Styling & Design',
    category: 'The Style & Emotion',
    tagline: 'Transforming plain document structure into an aesthetic editorial experience.',
    description: 'CSS (Cascading Style Sheets) brings color, typography, balance, spacing, and delightful animations to life. If HTML is the notebook pages, CSS is your ink, calligraphy, margins, and pastel ribbons.',
    icon: 'Palette',
    readTime: '18 min read',
    difficulty: 'Beginner-Friendly',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'Selectors target HTML tags, classes (.name), and IDs (#name)',
      'The Box Model governs margin, border, padding, and content',
      'Flexbox solves 1-dimensional layouts (rows or columns)',
      'CSS Grid manages 2-dimensional layouts with rows and columns',
      'Media queries make layouts look flawless on phones, tablets, and desktops'
    ],
    lessons: [
      {
        id: 'selectors',
        title: 'Selectors & The Cascade',
        badge: 'Lesson 1',
        summary: 'Targeting elements with classes, pseudo-classes, and understanding specificity.',
        content: {
          intro: 'CSS works through rules: a selector points to what you want to dress up, followed by a declaration block specifying color, size, and spacing properties.',
          sections: [
            {
              heading: 'Class Selectors & Hover States',
              body: 'Using clean, semantic class names keeps your styles modular and reusable across multiple cards or buttons.',
              codeSnippet: {
                language: 'css',
                filename: 'styles.css',
                code: `/* Class selector for a cute button */
.btn-blush {
  background-color: #FDF2F4;
  color: #9F3E57;
  border: 1px solid #F8D7DE;
  padding: 10px 20px;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Hover pseudo-class */
.btn-blush:hover {
  background-color: #FCE7F3;
  transform: translateY(-1px);
}`
              }
            }
          ]
        }
      },
      {
        id: 'boxmodel',
        title: 'The CSS Box Model',
        badge: 'Lesson 2',
        summary: 'Understanding Content, Padding, Border, and Margin once and for all.',
        content: {
          intro: 'Every single element in CSS is a rectangular box. Mastering the box model is the secret to never struggling with layout spacing again.',
          sections: [
            {
              heading: 'The 4 Layers of Every Element',
              body: 'From inside to outside:\n1. Content: The text or image itself\n2. Padding: Breathing space inside the box boundary\n3. Border: The outer line wrapping the padding\n4. Margin: Transparent cushion pushing outside neighbor elements away.',
              codeSnippet: {
                language: 'css',
                filename: 'box-model.css',
                code: `/* Universal box-sizing reset (Best Practice!) */
*, *::before, *::after {
  box-sizing: border-box;
}

.notebook-card {
  width: 320px;
  padding: 24px;              /* Space inside */
  border: 1px solid #EBE6DF;  /* Delicate outline */
  margin: 16px auto;          /* Centered with space outside */
  background: #FFFFFF;
}`
              },
              callout: {
                type: 'tip',
                text: 'Always include `box-sizing: border-box`. This ensures padding and border do NOT expand your element beyond its declared width!'
              }
            }
          ]
        }
      },
      {
        id: 'flexbox',
        title: 'Flexbox Layouts',
        badge: 'Lesson 3',
        summary: 'One-dimensional layouts made easy: aligning items, centering elements, and distributing space.',
        content: {
          intro: 'Flexbox (Flexible Box Module) makes aligning items horizontally or vertically an absolute dream. Centering a div is now just 3 lines of CSS.',
          sections: [
            {
              heading: 'Centering & Navigation Bars with Flexbox',
              body: 'Turn a parent into a flex container using display: flex, then use justify-content for main-axis spacing and align-items for cross-axis alignment.',
              codeSnippet: {
                language: 'css',
                filename: 'navbar.css',
                code: `/* The ultimate centering trick */
.hero-wrapper {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;     /* Vertically center */
  min-height: 80vh;
}

/* Horizontal navigation bar */
.nav-links {
  display: flex;
  gap: 20px;              /* Modern spacing between items */
  list-style: none;
  align-items: center;
}`
              }
            }
          ]
        }
      },
      {
        id: 'grid-responsive',
        title: 'CSS Grid & Responsive Design',
        badge: 'Lesson 4',
        summary: 'Crafting two-dimensional magazine grids and adapting with mobile media queries.',
        content: {
          intro: 'CSS Grid allows you to build complex newspaper or magazine layouts effortlessly. Combined with media queries, your design looks bespoke on any screen size.',
          sections: [
            {
              heading: 'Responsive Auto-Fitting Grid',
              body: 'Here is a magical CSS Grid snippet that automatically creates as many columns as fit the screen, wrapping cleanly on mobile devices without any media queries!',
              codeSnippet: {
                language: 'css',
                filename: 'grid.css',
                code: `.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Mobile fine-tuning with Media Queries */
@media (max-width: 640px) {
  .site-title {
    font-size: 28px;
    text-align: center;
  }
}`
              }
            }
          ]
        }
      }
    ]
  },

  javascript: {
    id: 'javascript',
    title: 'JavaScript Magic',
    category: 'The Interactive Soul',
    tagline: 'Bring your pages to life with interactivity, logic, and state.',
    description: 'JavaScript is the programming language of the web. It lets you respond to clicks, fetch weather data, toggle cozy dark modes, play soothing sounds, and calculate budgets in real time.',
    icon: 'Sparkles',
    readTime: '20 min read',
    difficulty: 'Beginner-Friendly',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'Store data using const (default) and let (when reassigning)',
      'Functions encapsulate reusable recipes of logic',
      'Arrays store ordered lists; Objects store key-value properties',
      'The DOM (Document Object Model) lets JavaScript read and modify HTML'
    ],
    lessons: [
      {
        id: 'variables',
        title: 'Variables, Types & Data',
        badge: 'Lesson 1',
        summary: 'Declaring data with const and let, understanding strings, numbers, and booleans.',
        content: {
          intro: 'Variables are like labeled keepsake boxes in your bedroom. You put data inside them, give them clear names, and open them whenever needed in your code.',
          sections: [
            {
              heading: 'Storing Information with const & let',
              body: 'Rule of thumb: Always use `const` by default. Only use `let` if you explicitly plan to change or reassign the value later (like a counter). Avoid the obsolete `var`.',
              codeSnippet: {
                language: 'javascript',
                filename: 'variables.js',
                code: `// A constant string that will not change
const authorName = "Flora";
const favoriteColor = "Rose Quartz";

// A number that will change as the user logs entries
let cupsOfTea = 2;
cupsOfTea = cupsOfTea + 1; // Now 3!

// Boolean (true or false)
let isReading = true;

// Template literals (backticks) for clean sentence building
console.log(\`\${authorName} had \${cupsOfTea} cups of tea today! ☕\`);`
              }
            }
          ]
        }
      },
      {
        id: 'functions',
        title: 'Functions & Arrow Syntax',
        badge: 'Lesson 2',
        summary: 'Writing reusable recipes of code that take inputs and return outputs.',
        content: {
          intro: 'Functions are like favorite baking recipes. You define the ingredients (parameters), perform instructions, and return a delicious result.',
          sections: [
            {
              heading: 'Standard Function vs Modern Arrow Syntax',
              body: 'Both forms are common. Arrow functions provide a concise, elegant syntax especially popular in modern frameworks like React.',
              codeSnippet: {
                language: 'javascript',
                filename: 'functions.js',
                code: `// 1. Traditional function declaration
function calculateReadingTime(wordCount) {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

// 2. Modern arrow function syntax
const formatGreeting = (name) => {
  return \`Welcome back, \${name}! ✨\`;
};

// Calling our functions
const minutes = calculateReadingTime(1200); // returns 6
console.log(formatGreeting("Maya")); // "Welcome back, Maya! ✨"`
              }
            }
          ]
        }
      },
      {
        id: 'arrays-objects',
        title: 'Arrays & Objects (Data Collections)',
        badge: 'Lesson 3',
        summary: 'Storing lists of items and structured records with methods like .map() and .filter().',
        content: {
          intro: 'Real-world apps rarely store single values. You will handle lists of blog posts, playlists of songs, or user profiles containing multiple properties.',
          sections: [
            {
              heading: 'Working with Arrays & Objects',
              body: 'Arrays use square brackets []; objects use curly braces {}. Array methods like .map() and .filter() are the superpower of modern frontend developers.',
              codeSnippet: {
                language: 'javascript',
                filename: 'collections.js',
                code: `// An object describing a book
const currentBook = {
  title: "A Room with a View",
  author: "E.M. Forster",
  pages: 256,
  finished: false
};

// An array of reading goals
const goals = ["Learn Flexbox", "Build a Portfolio", "Read 12 books"];

// Array methods: .filter() creates a filtered sub-list
const shortGoals = goals.filter(goal => goal.length < 20);

// .forEach() loops through items cleanly
goals.forEach((goal, index) => {
  console.log(\`\${index + 1}. \${goal}\`);
});`
              }
            }
          ]
        }
      },
      {
        id: 'dom-events',
        title: 'The DOM & Event Listeners',
        badge: 'Lesson 4',
        summary: 'Selecting HTML elements and responding to clicks, keypresses, and input changes.',
        content: {
          intro: 'The Document Object Model (DOM) is JavaScript’s bridge to the webpage. You can select any button or paragraph and change its text, add classes, or listen for clicks.',
          sections: [
            {
              heading: 'Interactive Button Clicker Example',
              body: 'Use document.querySelector to select an element, and addEventListener to wait for user interaction.',
              codeSnippet: {
                language: 'javascript',
                filename: 'interactive.js',
                code: `// Grab the button and greeting text from the HTML
const heartBtn = document.querySelector("#heart-button");
const counterDisplay = document.querySelector("#like-count");

let likes = 0;

// Listen for the click event
heartBtn.addEventListener("click", () => {
  likes += 1;
  counterDisplay.textContent = \`\${likes} hearts received ✿\`;
  
  // Toggle a cute celebration class
  heartBtn.classList.add("scale-110");
  setTimeout(() => heartBtn.classList.remove("scale-110"), 150);
});`
              },
              callout: {
                type: 'tip',
                text: 'Never use inline onclick="..." attributes in HTML. Keeping JavaScript in event listeners keeps your markup tidy and professional!'
              }
            }
          ]
        }
      }
    ]
  },

  python: {
    id: 'python',
    title: 'Python for Beginners',
    category: 'Gentle, Powerful Scripting',
    tagline: 'The world’s friendliest programming language for automation and logic.',
    description: 'Python reads almost like plain English poetry. It is widely loved for data analysis, artificial intelligence, building web servers, and automating everyday computer tasks.',
    icon: 'Terminal',
    readTime: '15 min read',
    difficulty: 'Beginner',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'Indentation (whitespace) defines code blocks — no semicolons needed!',
      'Variables are dynamically typed without variable declaration keywords',
      'Lists, dictionaries, and tuples store structured data smoothly',
      'Functions are defined with the def keyword'
    ],
    lessons: [
      {
        id: 'python-basics',
        title: 'Clean Syntax & Indentation',
        badge: 'Lesson 1',
        summary: 'Writing your first Python script, variables, and why indentation matters.',
        content: {
          intro: 'Unlike languages that require semicolons and curly brackets everywhere, Python enforces clean indentation (typically 4 spaces). This makes Python code visually soothing and easy to read.',
          sections: [
            {
              heading: 'Python Variables & Types',
              body: 'In Python, you simply write the variable name and assign it with `=`. No `let` or `const` required!',
              codeSnippet: {
                language: 'python',
                filename: 'hello.py',
                code: `# Comments begin with a hash symbol
project_name = "Her Codebook"
chapters_written = 8
completion_rate = 0.75
is_published = True

# Beautiful f-strings for string formatting
print(f"Welcome to {project_name}!")
print(f"We have written {chapters_written} chapters so far.")`
              }
            }
          ]
        }
      },
      {
        id: 'python-loops',
        title: 'Loops & Conditionals',
        badge: 'Lesson 2',
        summary: 'Making decisions with if / elif / else and iterating with for and while.',
        content: {
          intro: 'Conditionals let your computer make choices based on data, while loops repeat an action over collections without you having to write repetitive lines.',
          sections: [
            {
              heading: 'Decision Making & For Loops',
              body: 'Notice how each block is indented underneath the colon (`:`).',
              codeSnippet: {
                language: 'python',
                filename: 'study_tracker.py',
                code: `study_streak_days = 7

if study_streak_days >= 7:
    print("Incredible! You earned the Gold Ribbon badge 🎀")
elif study_streak_days >= 3:
    print("Great momentum! Keep going ✿")
else:
    print("Every journey begins with day one ✨")

# Looping over a list
favorite_topics = ["Semantic HTML", "CSS Grid", "Python Loops"]
for index, topic in enumerate(favorite_topics, start=1):
    print(f"{index}. Today's focus: {topic}")`
              }
            }
          ]
        }
      },
      {
        id: 'python-functions',
        title: 'Defining Functions & Dictionaries',
        badge: 'Lesson 3',
        summary: 'Creating modular code blocks with def and storing key-value pairs.',
        content: {
          intro: 'Functions in Python start with `def`, followed by the name, parameters, and a return statement. Dictionaries allow you to organize data by named keys.',
          sections: [
            {
              heading: 'Creating a Cute Daily Affirmation Helper',
              body: 'Functions keep your programs clean, organized, and testable.',
              codeSnippet: {
                language: 'python',
                filename: 'affirmations.py',
                code: `import random

def get_daily_encouragement(learner_name):
    affirmations = [
        "Your code is thoughtful and creative.",
        "Every error message is just a hint guiding you.",
        "You belong in tech, building things that matter."
    ]
    chosen = random.choice(affirmations)
    return f"Dear {learner_name}: {chosen} ✦"

# Test our function
message = get_daily_encouragement("Sophie")
print(message)`
              }
            }
          ]
        }
      }
    ]
  },

  git: {
    id: 'git',
    title: 'Git & GitHub Workflows',
    category: 'Version Control & Collaboration',
    tagline: 'Save snapshots of your code and share your creations with the world.',
    description: 'Git is like a magical time machine for your project files. It lets you record checkpoints (commits), experiment safely on separate branches, and upload your repositories to GitHub.',
    icon: 'GitBranch',
    readTime: '14 min read',
    difficulty: 'Beginner-Friendly',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'Git is the local tool on your computer; GitHub is the cloud platform where you host and share code',
      'Use git add . to stage changes, then git commit -m "..." to save a milestone',
      'Branches let you test ideas without breaking the working main code',
      'Pull Requests (PRs) are how developers propose and review changes'
    ],
    lessons: [
      {
        id: 'mental-model',
        title: 'The Mental Model of Git',
        badge: 'Lesson 1',
        summary: 'Working directory, staging area, and local commit history.',
        content: {
          intro: 'Think of Git like taking a photograph for a scrapbook. You arrange items on your desk (staging with git add), then click the camera shutter to preserve the memory with a note (git commit).',
          sections: [
            {
              heading: 'The Daily Core Git Workflow',
              body: '90% of your daily Git work consists of these three simple terminal commands.',
              codeSnippet: {
                language: 'bash',
                filename: 'terminal',
                code: `# 1. Check which files were created or modified
git status

# 2. Stage all updated files for your snapshot
git add .

# 3. Save the snapshot with a clear, present-tense message
git commit -m "Add pastel button styles and navigation bar"

# 4. Send your commits to your GitHub repository
git push origin main`
              }
            }
          ]
        }
      },
      {
        id: 'branches-prs',
        title: 'Branches & Pull Requests',
        badge: 'Lesson 2',
        summary: 'Safe experimentation, teamwork, and contributing to open-source.',
        content: {
          intro: 'When working on a new feature, you never want to risk breaking the working version. A branch is your safe parallel universe.',
          sections: [
            {
              heading: 'Creating and Merging Branches',
              body: 'Create a feature branch, do your work freely, and merge it back into main when it’s verified and polished.',
              codeSnippet: {
                language: 'bash',
                filename: 'terminal',
                code: `# Create and switch to a new branch
git checkout -b feature/reading-tracker

# ... Write your code and make commits ...
git add .
git commit -m "Implement book rating stars"

# Switch back to main branch
git checkout main

# Merge the branch in
git merge feature/reading-tracker`
              },
              callout: {
                type: 'tip',
                text: 'On GitHub, open a Pull Request (PR). It shows an exact visual diff of every line added or removed, allowing mentors or friends to review your work!'
              }
            }
          ]
        }
      }
    ]
  },

  webdev: {
    id: 'webdev',
    title: 'Modern Web Development',
    category: 'How the Web Works',
    tagline: 'Understanding the big picture: frontend, backend, APIs, and databases.',
    description: 'Demystifying the invisible machinery that powers everything from social networks to personal blogs when you type a URL into a browser address bar.',
    icon: 'Globe',
    readTime: '16 min read',
    difficulty: 'Beginner-Friendly',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'The Frontend is what runs in the user’s browser (HTML, CSS, JavaScript, React)',
      'The Backend is the server running in the cloud processing data and logic',
      'APIs (Application Programming Interfaces) are digital waiters taking requests and returning JSON responses',
      'Databases securely store records like user accounts, recipes, or comments'
    ],
    lessons: [
      {
        id: 'client-server',
        title: 'Clients, Servers & HTTP',
        badge: 'Lesson 1',
        summary: 'What happens in the fractions of a second between hitting Enter and seeing a page.',
        content: {
          intro: 'When you open a website, your browser (the client) sends an HTTP GET request across fiber optic cables to a server located anywhere in the world, which packages up HTML, CSS, images, and sends them back.',
          sections: [
            {
              heading: 'The Restaurant Analogy',
              body: '1. You (The Client): Sitting at a table ordering food\n2. The Waiter (The API): Carries your order ticket to the kitchen and brings back your plate\n3. The Kitchen (The Backend Server): Prepares the meal using ingredients\n4. The Pantry (The Database): Where raw ingredients are organized and stored.',
              codeSnippet: {
                language: 'json',
                filename: 'api-response.json',
                code: `{
  "status": 200,
  "message": "Welcome to Her Codebook",
  "featuredTopic": "CSS Grid Essentials",
  "quotes": [
    "You have the power to create anything you imagine."
  ]
}`
              }
            }
          ]
        }
      },
      {
        id: 'apis-databases',
        title: 'APIs & JSON Data',
        badge: 'Lesson 2',
        summary: 'Fetching real-world data like weather forecasts or book recommendations in JavaScript.',
        content: {
          intro: 'APIs speak in JSON (JavaScript Object Notation). Using the modern `fetch()` API in JavaScript, you can display live information on your site without refreshing the page.',
          sections: [
            {
              heading: 'Using fetch() with async/await',
              body: 'Here is how modern developers retrieve data cleanly in JavaScript.',
              codeSnippet: {
                language: 'javascript',
                filename: 'fetch-example.js',
                code: `async function loadInspirationalQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random?tags=technology,creativity");
    if (!response.ok) throw new Error("Network response was not ok");
    
    const data = await response.json();
    console.log(\`"\${data.content}" — \${data.author}\`);
  } catch (error) {
    console.error("Could not load quote:", error);
  }
}`
              }
            }
          ]
        }
      }
    ]
  },

  devtools: {
    id: 'devtools',
    title: 'Developer Tools & Setup',
    category: 'Your Creative Workbench',
    tagline: 'Customizing VS Code, mastering Chrome DevTools, and understanding npm.',
    description: 'Setting up a cozy, aesthetic development environment is one of the most delightful parts of coding. Your editor should feel inspiring, comfortable, and uniquely yours.',
    icon: 'Wrench',
    readTime: '12 min read',
    difficulty: 'Beginner',
    accentColor: '#FDF2F4',
    keyTakeaways: [
      'VS Code is the gold-standard free code editor used by professionals',
      'Chrome DevTools lets you inspect live CSS styles and debug errors in the Console',
      'npm (Node Package Manager) installs open-source libraries and utilities',
      'Aesthetic themes and fonts make long coding sessions a joy'
    ],
    lessons: [
      {
        id: 'vscode-setup',
        title: 'VS Code & Aesthetic Themes',
        badge: 'Lesson 1',
        summary: 'Essential extensions, cozy pastel themes, and keyboard shortcuts.',
        content: {
          intro: 'Visual Studio Code is where your ideas turn into files. Installing a comforting color theme and legible font makes all the difference.',
          sections: [
            {
              heading: 'Recommended Extensions & Themes for Beginners',
              body: '• Prettier: Automatically formats your code with clean indentation whenever you save.\n• Live Server: Launches a local server that auto-refreshes your browser as you edit.\n• Catppuccin Latte or Rosé Pine Dawn: Warm, soft pastel editor themes gentle on the eyes.\n• Auto Rename Tag: Renames closing HTML tags automatically when you modify the opening tag.',
              codeSnippet: {
                language: 'json',
                filename: 'settings.json',
                code: `{
  "editor.fontSize": 15,
  "editor.lineHeight": 1.6,
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "workbench.colorTheme": "Rosé Pine Dawn"
}`
              }
            }
          ]
        }
      },
      {
        id: 'chrome-devtools',
        title: 'Chrome DevTools & The Console',
        badge: 'Lesson 2',
        summary: 'Inspecting elements, testing CSS live, and reading JavaScript console errors.',
        content: {
          intro: 'Right-click any webpage and choose "Inspect". You have opened DevTools — the secret superpower every web engineer relies on daily.',
          sections: [
            {
              heading: 'The 3 Most Helpful DevTools Panels',
              body: '1. Elements Tab: View live HTML markup and click any element to preview CSS changes in real time before editing your file.\n2. Console Tab: View console.log() messages and read error notifications when something doesn’t work as expected.\n3. Network Tab: Watch images, fonts, and API requests load to diagnose slow assets.',
              codeSnippet: {
                language: 'javascript',
                filename: 'console-tricks.js',
                code: `// DevTools console styling tricks
console.log(
  "%c Welcome to Her Codebook ✨ ",
  "background: #FDF2F4; color: #9F3E57; font-size: 14px; border-radius: 6px; padding: 4px 8px;"
);

// Helpful table output for arrays of objects
const students = [
  { name: "Aria", language: "Python" },
  { name: "Beatrix", language: "JavaScript" }
];
console.table(students);`
              }
            }
          ]
        }
      }
    ]
  }
};

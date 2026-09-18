import { CheatSheetCategory } from '../types';

export const cheatSheetsData: CheatSheetCategory[] = [
  {
    id: 'html-tags',
    title: 'HTML Common Elements',
    badge: 'Structure',
    items: [
      {
        name: 'Basic Page Skeleton',
        description: 'Standard boilerplate for any modern HTML5 document.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document Title</title>
</head>
<body>
  <!-- Page content goes here -->
</body>
</html>`
      },
      {
        name: 'Links & Images',
        description: 'Anchor tags with target options, and images with accessibility alt text.',
        code: `<!-- Link opening in new tab safely -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Site</a>

<!-- Accessible Image -->
<img src="flower.jpg" alt="Delicate pink peony flower in soft morning light" />`
      },
      {
        name: 'Semantic Landmarks',
        description: 'Descriptive layout tags that replace endless uninformative <div> containers.',
        code: `<header>...</header>  <!-- Site top & brand -->
<nav>...</nav>        <!-- Navigation links -->
<main>...</main>      <!-- Primary page body -->
<article>...</article><!-- Independent self-contained piece -->
<aside>...</aside>    <!-- Sidebar or tangential note -->
<footer>...</footer>  <!-- Copyright and secondary links -->`
      },
      {
        name: 'Form Inputs',
        description: 'Common input fields paired with accessible labels.',
        code: `<label for="username">Name:</label>
<input type="text" id="username" placeholder="Audrey" required />

<label for="theme">Choose a theme:</label>
<select id="theme">
  <option value="rose">Soft Rose</option>
  <option value="cream">Vintage Cream</option>
</select>`
      }
    ]
  },
  {
    id: 'css-layout',
    title: 'CSS Layout & Flexbox',
    badge: 'Styling',
    items: [
      {
        name: 'Absolute Centering with Flexbox',
        description: 'Center anything horizontally and vertically inside its parent container.',
        code: `.parent-container {
  display: flex;
  justify-content: center; /* Horizontally */
  align-items: center;     /* Vertically */
  min-height: 100vh;
}`
      },
      {
        name: 'Space-Between Navigation Bar',
        description: 'Push logo to the far left and navigation links to the far right.',
        code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
}`
      },
      {
        name: 'Responsive Auto-Grid',
        description: 'Creates responsive cards that wrap gracefully without writing media queries.',
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}`
      },
      {
        name: 'Modern Box Shadow & Pill Radius',
        description: 'Subtle, soft shadow and perfectly rounded pill styling.',
        code: `.soft-card {
  background: #FFFFFF;
  border: 1px solid #EAE5DE;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(40, 30, 20, 0.04);
}

.pill-tag {
  border-radius: 9999px;
  padding: 4px 14px;
}`
      }
    ]
  },
  {
    id: 'js-syntax',
    title: 'JavaScript Quick Reference',
    badge: 'Interactivity',
    items: [
      {
        name: 'Array Iteration (.map & .filter)',
        description: 'Transform lists into new values or filter down to matching items.',
        code: `const prices = [12, 24, 36];
// Double each price
const doubled = prices.map(p => p * 2); // [24, 48, 72]

// Keep only items under 30
const affordable = prices.filter(p => p < 30); // [12, 24]`
      },
      {
        name: 'DOM Query & Event Listener',
        description: 'Grab a button, handle a click, and update page text cleanly.',
        code: `const bookmarkBtn = document.querySelector("#bookmark-btn");
const statusLabel = document.querySelector("#status-label");

bookmarkBtn.addEventListener("click", () => {
  statusLabel.textContent = "Saved to your notebook! 🔖";
  statusLabel.classList.add("text-rose-500");
});`
      },
      {
        name: 'Local Storage (Save & Load)',
        description: 'Persist user settings or favorites directly in the browser across reloads.',
        code: `// Save a preference
localStorage.setItem("userTheme", "blush-cream");

// Retrieve the preference later
const savedTheme = localStorage.getItem("userTheme");

// Save an array or object using JSON
localStorage.setItem("savedArticles", JSON.stringify(["html-basics", "css-grid"]));
const articles = JSON.parse(localStorage.getItem("savedArticles") || "[]");`
      },
      {
        name: 'Async / Await API Fetching',
        description: 'Fetch JSON data from a public API without callback tangles.',
        code: `async function fetchDailyAffirmation() {
  const res = await fetch("https://api.example.com/daily-quote");
  const data = await res.json();
  return data.quote;
}`
      }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python Essentials',
    badge: 'Python',
    items: [
      {
        name: 'List Comprehensions',
        description: 'Elegant, single-line Pythonic way to construct filtered or transformed lists.',
        code: `# Squaring numbers
numbers = [1, 2, 3, 4, 5]
squares = [n ** 2 for n in numbers]

# Filtering names that start with 'A'
names = ["Alice", "Flora", "Amara", "Chloe"]
a_names = [name for name in names if name.startswith("A")]
# Result: ['Alice', 'Amara']`
      },
      {
        name: 'Dictionary Operations',
        description: 'Working with key-value data mappings in Python.',
        code: `student = {
  "name": "Evelyn",
  "topic": "Python",
  "lessons_completed": 5
}

# Safe lookup with default value
streak = student.get("streak", 0)

# Looping over keys and values
for key, val in student.items():
    print(f"{key}: {val}")`
      },
      {
        name: 'File Reading & Writing',
        description: 'Using the safe `with open()` context manager.',
        code: `# Writing text to a file
with open("study_notes.txt", "w") as file:
    file.write("Completed Python chapter one! ✦\\n")

# Reading lines from a file
with open("study_notes.txt", "r") as file:
    content = file.read()
    print(content)`
      }
    ]
  },
  {
    id: 'git-commands',
    title: 'Git Terminal Commands',
    badge: 'Version Control',
    items: [
      {
        name: 'Initialize & Clone',
        description: 'Start a new local git repo or download one from GitHub.',
        code: `git init                     # Initialize a new local repository
git clone <repository_url>   # Download an existing project to your computer`
      },
      {
        name: 'Snapshotting Changes',
        description: 'Check status, stage files, and commit with a message.',
        code: `git status                   # View changed, untracked, and staged files
git add .                    # Stage all changes in current folder
git commit -m "Your concise commit message"`
      },
      {
        name: 'Branching & Switching',
        description: 'Create experimental branches and switch back smoothly.',
        code: `git branch                   # List all local branches
git checkout -b new-feature  # Create & switch to a new branch
git checkout main            # Switch back to main branch
git merge new-feature        # Merge changes into current branch`
      },
      {
        name: 'Synchronizing with GitHub',
        description: 'Push your commits online or pull team updates.',
        code: `git push origin main         # Upload local commits to remote main branch
git pull origin main         # Download recent changes from GitHub`
      }
    ]
  }
];

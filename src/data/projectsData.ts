import { ProjectIdea } from '../types';

export const projectsData: ProjectIdea[] = [
  {
    id: 'link-in-bio',
    title: 'Aesthetic “Link-in-Bio” Page',
    difficulty: 'Easy First Step',
    timeEstimate: '2 – 3 hours',
    techStack: ['HTML5', 'CSS Flexbox', 'Google Fonts'],
    summary: 'A charming, personalized single-page website to link your social profiles, creative portfolio, favorite books, and current playlist.',
    whyBuildIt: 'It is the perfect beginner project because you learn essential layout centering, custom fonts, rounded pill buttons, hover micro-interactions, and mobile responsiveness without feeling overwhelmed.',
    features: [
      'Circular profile avatar with soft border and subtle hover zoom',
      'Name in elegant serif display font with cute handle pill',
      'Vertical list of pill-shaped links with icons and gentle hover elevations',
      'Social media footer links with Lucide icons',
      'Clean cream-and-blush color palette'
    ],
    starterSteps: [
      'Create an index.html file with semantic <header>, <main>, and <footer> tags.',
      'Link a custom Google Font (e.g. Fraunces or Playfair) in the <head>.',
      'Center the content column using max-width: 480px; margin: 0 auto; and display: flex; flex-direction: column;.',
      'Style anchor tags as rounded buttons with padding: 14px 20px; text-decoration: none; and border: 1px solid #EAE5DE;.',
      'Deploy for free to GitHub Pages or Netlify!'
    ],
    starterCode: {
      filename: 'index.html',
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sophie’s Links ✿</title>
  <style>
    body {
      background-color: #FAF8F5;
      font-family: 'Plus Jakarta Sans', sans-serif;
      display: flex;
      justify-content: center;
      padding: 40px 16px;
      color: #292524;
    }
    .card {
      width: 100%;
      max-width: 420px;
      text-align: center;
    }
    .avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: 3px solid #F8D7DE;
      margin-bottom: 12px;
    }
    .link-pill {
      display: block;
      background: #FFFFFF;
      border: 1px solid #EAE5DE;
      padding: 14px;
      margin: 12px 0;
      border-radius: 9999px;
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .link-pill:hover {
      background: #FDF2F4;
      border-color: #F8D7DE;
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="avatar.jpg" alt="Profile" class="avatar">
    <h2>Sophie Lin ✦</h2>
    <p>learning to code & brewing jasmine tea</p>
    <a href="#" class="link-pill">📖 My GoodReads Shelf</a>
    <a href="#" class="link-pill">💻 GitHub Portfolio</a>
    <a href="#" class="link-pill">🎧 Cozy Lo-Fi Coding Playlist</a>
  </div>
</body>
</html>`
    }
  },
  {
    id: 'affirmation-jar',
    title: 'Daily Inspiration & Affirmation Jar',
    difficulty: 'Easy First Step',
    timeEstimate: '3 – 4 hours',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    summary: 'A warm interactive virtual jar that dispenses a thoughtful daily coding affirmation, advice snippet, or gentle reminder on every click.',
    whyBuildIt: 'Introduces fundamental JavaScript DOM manipulation, array indexing, Math.random(), event listeners, and CSS fade-in animations.',
    features: [
      'Clickable illustrated jar or button that produces a new message',
      'Curated array of uplifting programming quotes and gentle reminders',
      'Copy-to-clipboard button to share favorite quotes with study friends',
      'Local storage counter showing how many affirmations you have collected'
    ],
    starterSteps: [
      'Define an array of 15+ encouraging quotes in JavaScript.',
      'Add a button with id="draw-button" and a quote container.',
      'Use Math.floor(Math.random() * quotes.length) to pick a random index.',
      'Update the textContent of the quote card and trigger an animation.'
    ],
    starterCode: {
      filename: 'script.js',
      language: 'javascript',
      code: `const affirmations = [
  "Your curiosity is your greatest programming superpower ✦",
  "Every experienced software engineer once had a syntax error.",
  "Small daily steps compound into breathtaking software.",
  "Be patient with yourself; learning is a gentle craft."
];

const drawBtn = document.getElementById("draw-btn");
const quoteText = document.getElementById("quote-text");

drawBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  quoteText.textContent = affirmations[randomIndex];
});`
    }
  },
  {
    id: 'pomodoro-timer',
    title: 'Cozy Study Pomodoro Timer',
    difficulty: 'Weekend Fun',
    timeEstimate: '4 – 6 hours',
    techStack: ['HTML', 'CSS', 'JavaScript (setInterval)'],
    summary: 'A minimalist 25-minute focus & 5-minute break timer with pastel progress ring and ambient session logger.',
    whyBuildIt: 'Teaches timing functions (setInterval & clearInterval), state tracking (isRunning, mode, remainingSeconds), sound playback, and state synchronization.',
    features: [
      '25-minute focus session and 5-minute restorative tea break toggle',
      'Smooth play/pause/reset controls with friendly icon buttons',
      'Visual countdown clock with padded minutes and seconds (e.g. 24:08)',
      'Session counter tracking how many focus blocks were completed today'
    ],
    starterSteps: [
      'Set up remainingSeconds = 25 * 60 and a timerInterval = null variable.',
      'Write a renderTime() function that computes Math.floor(seconds / 60) and seconds % 60.',
      'Implement startTimer() using setInterval(() => { remainingSeconds--; renderTime(); }, 1000).',
      'Add sound chime or visual notification when timer hits 00:00.'
    ]
  },
  {
    id: 'reading-log',
    title: 'Personal Book Nook & Reading Tracker',
    difficulty: 'Portfolio Builder',
    timeEstimate: '1 – 2 weekends',
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
    summary: 'A digital reading journal to log book covers, authors, ratings, favorite quotes, and completion status.',
    whyBuildIt: 'Demonstrates complete CRUD (Create, Read, Update, Delete) capability using localStorage. A standout addition to any beginner junior developer portfolio!',
    features: [
      'Form to add new books with title, author, genre, and star rating',
      'Grid of card displays with soft shadows and pastel status tags (Reading, Finished, Wishlist)',
      'Local storage persistence so entries remain saved between browser sessions',
      'Search and filter bar by genre or reading status'
    ],
    starterSteps: [
      'Structure a Book object type: { id, title, author, rating, status, date }.',
      'Read existing books from localStorage on page load.',
      'Handle form submission to push new book into array and re-render.',
      'Add a delete and toggle-status button on each card.'
    ]
  },
  {
    id: 'pastel-calculator',
    title: 'Soft Editorial Calculator',
    difficulty: 'Weekend Fun',
    timeEstimate: '4 – 5 hours',
    techStack: ['HTML Grid', 'CSS', 'JavaScript Logic'],
    summary: 'A chic, tactile desktop calculator for quick math, budgeting, or calculating study hours.',
    whyBuildIt: 'Deepens understanding of CSS Grid layouts for keypad buttons and parsing user input logic safely.',
    features: [
      'CSS Grid keypad layout with dedicated numeric and operator keys',
      'Clean calculation display showing current expression and result',
      'Keyboard support for number keys, Enter (=), and Escape (AC)'
    ],
    starterSteps: [
      'Build a 4-column CSS grid for buttons 0-9, +, -, *, /, =, and Clear.',
      'Maintain an expression string state in JavaScript.',
      'Append characters when buttons are clicked and evaluate cleanly.'
    ]
  }
];

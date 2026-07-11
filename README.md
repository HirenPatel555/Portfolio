# Hiren Patel - Portfolio Website

A sleek, highly interactive, and responsive portfolio website designed and developed for **Hiren Patel**, a Data Analyst, Power BI Developer, and Insight Builder. Built using React, Vite, Tailwind CSS v4, and Framer Motion, this portfolio features premium aesthetics, custom animations, and a rich dark mode theme.

---

## 🌟 Key Features

- **System Boot Loader**: An interactive console startup terminal animation that simulates system boot steps before loading the portfolio.
- **Custom Cursor & Aura**: A fluid custom-designed cursor aura that follows the mouse path, providing a modern glowing effect.
- **Ambient Floating Background**: Animated floating technical elements drifting across the page for an immersive feel.
- **Navigation & Scroll Progress**: A sticky header navbar coupled with a top progress bar tracking scroll status.
- **Interactive Sections**:
  - **Hero**: Welcome greeting, interactive roles rotater, and social media connectivity (GitHub, LinkedIn, Twitter/X, Instagram).
  - **About Me**: Professional summary, academic milestones, and key metrics.
  - **Skills Showcase**: Categorized list of technical skills (Core Analyst Tools, Analytical Skills, Databases & Web, Tools & Workflow) complete with responsive hover states.
  - **Projects Showcase**: Interactive cards depicting data dashboards, customer analytics, and database setups with rich gradient covers and tech tags.
  - **Experience Timeline**: An interactive, chronological listing of professional history (Product Data & Content Associate, Laravel Developer Intern).
  - **Why Work With Me**: Value propositions (Data Integrity, Business Focus, Technical Foundation) organized in a structural grid.
  - **Contact Form**: An integrated web form with input validation and a custom **Thank You** screen animation upon successful submission.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and static graphics
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # Academic history & stats
│   │   ├── Contact.jsx     # Contact form with email connection
│   │   ├── CustomCursor.jsx# Interactive mouse tracker
│   │   ├── Experience.jsx  # Interactive work history timeline
│   │   ├── Hero.jsx        # Interactive greeting, social profiles
│   │   ├── Navbar.jsx      # Header menu links & navigation
│   │   ├── Projects.jsx    # Projects listing with custom gradient covers
│   │   ├── Skills.jsx      # Skills badges categorized
│   │   └── ...
│   ├── data/
│   │   └── portfolioData.js# Structured JavaScript data file containing portfolio text & details
│   ├── App.jsx             # Main Application hub with boot screen logic
│   ├── index.css           # Core styling, fonts, and custom styles
│   └── main.jsx            # React root mount point
├── index.html              # Core HTML structure & SEO meta tags
├── package.json            # Configuration and project dependency manager
└── vite.config.js          # Vite build environment configuration
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HirenPatel555/Portfolio.git
   cd Portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build

To compile the application for production:
```bash
npm run build
```
This outputs compiled, optimized assets to the `dist/` directory.

### Preview Build

Preview your production build locally:
```bash
npm run preview
```

### Linting

To run ESLint and inspect the code for potential bugs or style issues:
```bash
npm run lint
```

---

## 📄 License

This project is open-source and available under the MIT License.

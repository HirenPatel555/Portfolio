# 📊 Hiren Patel — Data & Business Analyst Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Recharts](https://img.shields.io/badge/Recharts-2.15-22b5bf?style=for-the-badge)](https://recharts.org/)

> **"Turning Raw Data Into Clear Executive Decisions."**

Welcome to the official repository for **Hiren Patel's Data Analyst & Business Analyst Portfolio**. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion, this interactive portfolio showcases end-to-end data analytics case studies, BI dashboard capabilities, SQL data modeling, and business problem-solving frameworks.

---

## 🌟 Key Highlights & Features

- 🎯 **Executive Case Studies with Data Visualizations**: Detailed analytics case studies complete with business problems, analytical methodologies, interactive Recharts graphs, KPIs, and actionable recommendations.
- 🎨 **Modern Dark & Light Theme System**: Smooth theme switcher with custom dark mode styling (`#0b0f12`), glassmorphism, and responsive design.
- ⚡ **Full Stack Data Driven**: Powered by a centralized, strongly-typed configuration (`src/data/portfolioData.ts`) for seamless updates and maintenance.
- 📱 **Fully Responsive Layout**: Optimized across desktop, tablet, and mobile displays with fluid animations powered by Framer Motion.
- 📄 **Resume Download Integration**: Direct download access for Hiren Patel's latest Data Analytics CV (`/public/resume/Hiren Patoliya DA (cv).pdf`).

---

## 👤 About Hiren Patel

- 🎓 **Education**:
  - **MBA in Business Analytics** — Parul University (*2026 – 2028*)
  - **Bachelor's Degree in Information Technology** — Noble University (*2023 – 2026*)
- 💼 **Professional Experience**:
  - **Product Data & Content Associate** at Dolphin Web Solution (*Feb 2026 – Present*)
  - **Laravel Developer Intern** at Memento Technologies (*Jun 2025 – Dec 2025*)
- 📍 **Location**: Gujarat, India
- ✉️ **Contact**: [h.p.patel.tech@gmail.com](mailto:h.p.patel.tech@gmail.com)
- 🔗 **LinkedIn**: [linkedin.com/in/hirenpatel555](https://www.linkedin.com/in/hirenpatel555/)
- 💻 **GitHub**: [github.com/HirenPatel555](https://github.com/HirenPatel555)

---

## 📊 Analytics Skill Matrix

| Category | Primary Tools & Capabilities |
| :--- | :--- |
| **Data Analytics** | **SQL**, **Python**, **Pandas**, NumPy, Exploratory Data Analysis (EDA), Data Cleaning & Wrangling |
| **Business Analytics** | Requirement Gathering, KPI Definition, Trend Analysis, Business Strategy, ROI Modeling |
| **Data Visualization** | **Power BI**, **Microsoft Excel** (Advanced Formulas, Pivot Tables), Recharts, Executive Storytelling |
| **Databases** | **MySQL**, Relational Database Design (RDBMS), CTEs, Window Functions, Schema Normalization |
| **Technical Stack** | **Next.js 14**, **TypeScript**, **Tailwind CSS**, PHP, Laravel, REST APIs, Git & GitHub |

---

## 📁 Featured Case Studies Included

### 1. 🛍️ E-Commerce Sales Performance Analysis
- **Tools Used**: `Excel`, `SQL`, `Power BI`
- **Objective**: Cleaned & analyzed 45,000+ transactional records ($2.42M volume) to identify high-return SKUs and regional revenue growth drivers.
- **Key Outcome**: Identified $34K potential annual savings by pinpointing high-return audio accessories and reallocating ad spend to high-AOV regions.

### 2. 🔄 Customer Churn & Retention Analysis
- **Tools Used**: `Python`, `Pandas`, `SQL`, `Power BI`
- **Objective**: Analyzed subscriber activity logs (12,500 accounts) to uncover churn triggers and retention indicators.
- **Key Outcome**: Discovered Month-to-Month contracts had a 34.6% churn rate vs 4.2% for annual contracts, projecting $185K in ARR retention through targeted SLA triggers.

### 3. 📦 Retail Inventory & Operations Analysis
- **Tools Used**: `SQL`, `Excel`, `Power BI`
- **Objective**: Executed ABC inventory classification and safety stock reorder point modeling across 8,200 SKUs and 12 branch store locations.
- **Key Outcome**: Projected a 28% reduction in stock-out occurrences on high-margin Class A items and unlocked $64.5K in tied-up working capital.

---

## 🛠️ Tech Stack & Architecture

```
hiren-patel-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom CSS & Tailwind base styles
│   │   ├── layout.tsx          # Root layout, metadata & theme provider
│   │   ├── page.tsx            # Main page composition
│   │   ├── robots.ts           # SEO Robots configuration
│   │   └── sitemap.ts          # XML Sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with theme switcher & mobile menu
│   │   ├── HeroSection.tsx     # Hero banner with primary CTA & quick stats
│   │   ├── AboutSection.tsx    # Bio, core competencies & personal background
│   │   ├── BusinessApproach.tsx# 4-Step Analytical Methodology (Understand, Analyze, etc.)
│   │   ├── ExperienceSection.tsx# Timeline of professional experience & roles
│   │   ├── SkillsSection.tsx   # Categorized interactive skill cards
│   │   ├── ProjectsSection.tsx # Grid of interactive case study cards
│   │   ├── ProjectModal.tsx    # Dynamic modal with deep-dive analytics & Recharts graphs
│   │   ├── EducationSection.tsx# Academic credentials & specialization highlights
│   │   ├── ContactSection.tsx  # Interactive contact form & direct social links
│   │   ├── ThemeProvider.tsx   # Light/Dark mode context provider
│   │   └── Footer.tsx          # Minimal footer with quick navigation links
│   └── data/
│       └── portfolioData.ts    # Single Source of Truth: All text, projects, & stats
└── public/
    └── resume/
        └── Hiren Patoliya DA (cv).pdf  # Active Resume/CV Document
```

---

## ⚡ Getting Started (Local Development)

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/HirenPatel555/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Updating Portfolio Data

All portfolio data (Bio, Experience, Education, Skills, and Case Studies) is maintained inside [`src/data/portfolioData.ts`](file:///c:/Projects/Portfolio/src/data/portfolioData.ts).

To update content or add a new case study:
1. Open [`src/data/portfolioData.ts`](file:///c:/Projects/Portfolio/src/data/portfolioData.ts).
2. Modify or append to the `projects`, `experiences`, `skills`, or `personal` object.
3. Save the file — the UI updates automatically with hot reloading!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Connect & Collaborate

If you have feedback, opportunities, or data questions, feel free to reach out!

- **Email**: [h.p.patel.tech@gmail.com](mailto:h.p.patel.tech@gmail.com)
- **LinkedIn**: [Hiren Patel](https://www.linkedin.com/in/hirenpatel555/)
- **GitHub**: [@HirenPatel555](https://github.com/HirenPatel555)

---
*Created with ❤️ by Hiren Patel*
